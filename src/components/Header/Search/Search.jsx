import React, { useEffect, useState } from 'react';
import './search.scss';
import { IoIosSearch } from 'react-icons/io';
import useDebounce from '../../../useDebounce';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const [allData, setAllData] = useState([]);  
    const [results, setResults] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const debouncedQuery = useDebounce(query, 500); 
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/navbar')  
            .then((response) => response.json())
            .then((data) => {
                setAllData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    useEffect(() => {
        if (debouncedQuery.trim()) {
            const filteredResults = allData.filter(item =>
                item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
            );
            setResults(filteredResults);
            setNoResults(filteredResults.length === 0);
        } else {
            setResults([]);
            setNoResults(false);
        }
    }, [debouncedQuery, allData]); 

    const handleResultClick = (path) => {
        setQuery(''); 
        navigate(path); 
    };

    return (
        <div className='search_wrapper'>
            <form className='search_form'>
                <label>
                    <IoIosSearch />
                </label>
                <input
                    type="search"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}  
                />
            </form>

            {debouncedQuery && (
                <div className='result_list'>
                    {results.length > 0 ? (
                        <ul>
                            {results.map((result) => (
                                <li
                                    key={result.id}
                                    onClick={() => handleResultClick(result.path)} 
                                >
                                    {result.name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        noResults && <p>Not Found</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
