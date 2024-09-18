import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PageHeader from '../../../components/PageHeader/PageHeader';
import DetailCLasses from './BlogDetails.module.css'
import { FaCubesStacked } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const { detailId } = useParams(); 

    const [detaildata, setDetailData] = useState({}); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:3001/blogs_page')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json();
            })
            .then((data) => {
                setDetailData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const selectedBlog = detaildata.blogs_details?.find(item => item.id == detailId);

    // prev and btn
    const currentIndex = detaildata.blogs_details?.findIndex((item) => item.id == detailId);

    const prevBlog = detaildata.blogs_details[currentIndex - 1];
    const nextBlog = detaildata.blogs_details[currentIndex + 1];
    return (
        <>
            <PageHeader banner={detaildata.banner} title={detaildata.title} />
            <section className={DetailCLasses.blogs_details}>
                <div className={DetailCLasses.container}>
                    <div className={DetailCLasses.content}>
                        <div className={DetailCLasses.image}>
                            <img src={selectedBlog?.image} alt="Blog Image" />
                        </div>
                        <div className={DetailCLasses.details_content}>
                            <h3>{selectedBlog?.title}</h3>
                            <p>{selectedBlog?.details}</p>
                        </div>
                        <div className={DetailCLasses.bottom_transiton}>
                            <ul>
                                <li>
                                    {prevBlog ? (
                                        <Link to={`/Blogs/${prevBlog.id}`}>
                                            <button>{selectedBlog.prev_btn}</button>
                                        </Link>
                                    ) : (
                                        <button disabled>{selectedBlog.prev_btn}</button>
                                    )}
                                    {prevBlog && <p>{prevBlog.title}</p>}
                                </li>
                                <li>
                                    <FaCubesStacked />
                                </li>
                                <li>
                                    {nextBlog ? (
                                        <Link to={`/Blogs/${nextBlog.id}`}>
                                            <button>{selectedBlog.next_btn}</button>
                                        </Link>
                                    ) : (
                                        <button disabled>{selectedBlog.next_btn}</button>
                                    )}
                                    {nextBlog && <p>{nextBlog.title}</p>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={DetailCLasses.detail_list}>
                        <ul>
                            {
                                selectedBlog?.detail_list?.map((item) => (
                                    <li key={item.id}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails