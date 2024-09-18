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

    // Services states
    const [servicepagedata, setServicePageData] = useState([])
    const [servicedetaildata, setServiceDetailData] = useState({});

    // Projects pages states
    const [projectsdata, setProjectsData] = useState([])
    const [prodetail, setProDetail] = useState({});

    // Blogs pages states
    const [blogdata, setBlogData] = useState([])
    const [detaildata, setDetailData] = useState({});

    // Contact pages state
    const [contactpagedata, setContactpageData] = useState([])

    // About Us state
    const [aboutpagedata, setAboutPageData] = useState([])

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

    // Services page data
    useEffect(() => {
        fetch('http://localhost:3001/services_page')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setServicePageData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    // Services details page data
    useEffect(() => {
        fetch('http://localhost:3001/services_page')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json();
            })
            .then((data) => {
                setServiceDetailData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    //   Projects page
    useEffect(() => {
        fetch('http://localhost:3001/projects_page')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json();
            })
            .then((data) => {
                setProjectsData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Projects Detail Page

    useEffect(() => {
        fetch('http://localhost:3001/projects_page')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json();
            })
            .then((data) => {
                setProDetail(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Blogs Page 
    useEffect(() => {
        fetch('http://localhost:3001/blogs_page')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setBlogData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    // Blogs Detail Page
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

    // About Us page
    useEffect(() => {
        fetch('http://localhost:3001/about_page')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setAboutPageData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    // Contact page
    useEffect(() => {
        fetch('http://localhost:3001/contact_page')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then((data) => {
                setContactpageData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data");
                setError(error.message)
                setLoading(false)

            })
    }, [])

    return (
        <DataContext.Provider value={{
            data, loading, error, linkdata, banner, aboutdata, projectdata, servicedata, servicelinkdata, partnerdata, contactdata, footerdata,
            servicepagedata, servicedetaildata, projectsdata, prodetail, blogdata, detaildata, contactpagedata, aboutpagedata
        }}>
            {children}
        </DataContext.Provider>
    )
}