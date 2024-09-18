import React, { useContext, useEffect } from 'react'
import ContactClasses from './contactussec.module.scss'
import { Link } from 'react-router-dom'
import { FaPhoneVolume } from 'react-icons/fa'
import { LiaFaxSolid } from 'react-icons/lia'
import { IoMailOpenOutline } from 'react-icons/io5'
import ContactForm from './Form/ContactForm'
import { DataContext } from '../../DataContext/DataContext'
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactUsSec = () => {
    const { contactdata, loading, error } = useContext(DataContext)

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });

    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            <section className={ContactClasses.Contact_us}>
                <div className={ContactClasses.container}>
                    <div className={ContactClasses.form_box} data-aos="fade-right">
                        <div className={ContactClasses.form_header}>
                            <h3>{contactdata.title}
                                <span>{contactdata.orange}</span>
                            </h3>
                            <p>{contactdata.text}</p>
                        </div>
                        <div className={ContactClasses.form}>
                            <ContactForm />
                        </div>
                        <div className={ContactClasses.contact}>
                            <ul>
                                <li>
                                    <FaPhoneVolume />
                                    <div>
                                        <h5>{contactdata.contact_title}</h5>
                                        <span>{contactdata.number}</span>
                                    </div>
                                </li>
                                <li>
                                    <LiaFaxSolid />
                                    <div>
                                        <h5>{contactdata.contact_title2}</h5>
                                        <span>{contactdata.number2}</span>
                                    </div>
                                </li>
                                <li>
                                    <IoMailOpenOutline />
                                    <div>
                                        <h5>{contactdata.contact_title3}</h5>
                                        <Link>{contactdata.mail}</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={ContactClasses.map} data-aos="fade-left">
                        <iframe src={contactdata.location}
                            width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className={ContactClasses.background}></div>
            </section>
        </>
    )
}

export default ContactUsSec