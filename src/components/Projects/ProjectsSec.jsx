import React, { useContext, useEffect, useState } from 'react'
import ProjectsClasses from './projectssec.module.scss'
import { Link } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'
import { DataContext } from '../../DataContext/DataContext'
import 'aos/dist/aos.css';
import AOS from 'aos';

const ProjectsSec = () => {
    const { projectdata, loading, error } = useContext(DataContext)

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
            <section className={ProjectsClasses.projects}>
                <div className={ProjectsClasses.container}>
                    <div className={ProjectsClasses.projects_header}>
                        <h2>{projectdata.title}</h2>
                    </div>
                    <div className={ProjectsClasses.cards}>
                        {
                            projectdata && projectdata.cards && projectdata.cards.map((item) => (
                                <div key={item.id} className={ProjectsClasses.card} data-aos="fade-up">
                                    <div className={ProjectsClasses.top}>
                                        <img src={item.image} alt="Bunker Projects" />
                                        <h5>{item.card_title}</h5>
                                    </div>
                                    <div className={ProjectsClasses.bottom}>
                                        <Link to={`/Projects/${item.id}`}>{item.button}<IoChevronForward /></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={ProjectsClasses.page_link}>
                        <Link to={projectdata.button_link}>{projectdata.button_title} <IoChevronForward /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsSec