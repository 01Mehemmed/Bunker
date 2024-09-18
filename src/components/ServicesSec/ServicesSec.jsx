import React, { useContext, useEffect, useState } from 'react'
import ServicesClasses from './servicessec.module.scss'
import { Link } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'
import ServicesLink from './ServicesLink/ServicesLink'
import { DataContext } from '../../DataContext/DataContext'
import 'aos/dist/aos.css';
import AOS from 'aos';

const ServicesSec = () => {
    const { servicedata, loading, error } = useContext(DataContext)

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
            <section className={ServicesClasses.Services}>
                <div className={ServicesClasses.container}>
                    <div className={ServicesClasses.services_header}>
                        <h2>{servicedata.title}</h2>
                    </div>
                    <div className={ServicesClasses.cards}>
                        {
                            servicedata && servicedata.cards && servicedata.cards.map((item) => (
                                <div key={item.id} className={ServicesClasses.card} data-aos="fade-up">
                                    <div className={ServicesClasses.top}>
                                        <img src={item.image} alt="Bunker Projects" />
                                        <h5>{item.card_header}</h5>
                                    </div>
                                    <div className={ServicesClasses.bottom}>
                                        <Link to={`/Services/${item.id}`}>{item.button}<IoChevronForward /></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={ServicesClasses.page_link}>
                        <Link to={servicedata.button_link}>{servicedata.button_title} <IoChevronForward /></Link>
                    </div>
                </div>
                <ServicesLink />
            </section>
        </>
    )
}

export default ServicesSec