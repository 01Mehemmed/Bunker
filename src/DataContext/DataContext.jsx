import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    // Home page & header & footer states
    const [data, setData] = useState([]);
    const [languageOptions, setLanguageOptions] = useState([]);
    const [linkdata, setlinkdata] = useState([])
    const [banner, setBanner] = useState([])
    const [aboutdata, setAboutData] = useState([])
    const [projectdata, setProjectData] = useState([])
    const [servicedata, setServiceData] = useState([])
    const [servicelinkdata, setServiceLinkData] = useState([])
    const [partnerdata, setPartnerData] = useState([])
    const [contactdata, setContactData] = useState([])
    const [footerdata, setFooterData] = useState([])

    // Loading and Error states 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Home page & header & footer data
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3001/navbar')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Header data could not be loaded');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/social_links')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setlinkdata(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/banner')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setBanner(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/about')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setAboutData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/projects')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setProjectData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/services')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setServiceData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])



    // Blogs Section


    useEffect(() => {
        fetch('http://localhost:3001/services_link')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setServiceLinkData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/OurPartner')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setPartnerData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/Contactus')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setContactData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    // Footer data


    useEffect(() => {
        fetch('http://localhost:3001/footer')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setFooterData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    return (
        <DataContext.Provider value={{ data, loading, error, linkdata, banner, aboutdata, projectdata, servicedata, servicelinkdata, partnerdata, contactdata, footerdata }}>
            {children}
        </DataContext.Provider>
    )
}