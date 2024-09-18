import React, { useContext, useEffect } from 'react'
import OurPartnerClasses from './ourpartners.module.scss'
import { DataContext } from '../../DataContext/DataContext'
import 'aos/dist/aos.css';
import AOS from 'aos';

const OurPartners = () => {
    const { partnerdata, loading, error } = useContext(DataContext)

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            <section className={OurPartnerClasses.Our_partners} data-aos="fade-down">
                <div className={OurPartnerClasses.container}>
                    <div className={OurPartnerClasses.header}>
                        <h3>{partnerdata.title}</h3>
                    </div>
                    <div className={OurPartnerClasses.partners}>
                        {partnerdata && partnerdata.images && partnerdata.images.map((item) => (
                            <div key={item.id} className={OurPartnerClasses.top}>
                                <img src={item.image} alt="Partners" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurPartners