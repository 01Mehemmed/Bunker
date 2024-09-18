import React, { useContext, useEffect } from 'react'
import AboutClasses from './about.module.scss'
import { IoChevronForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { DataContext } from '../../DataContext/DataContext'
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutSec = () => {
  const { aboutdata, loading, error } = useContext(DataContext)

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
      <section className={AboutClasses.About} data-aos="fade-right">
        <div className={AboutClasses.container}>
          <div className={AboutClasses.left}>
            <img src={aboutdata.image} alt="Bunker About" />
          </div>
          <div className={AboutClasses.right}>
            <div className={AboutClasses.box_header}>
              <h2>{aboutdata.title}</h2>
              <h4>{aboutdata.subtitle}</h4>
            </div>
            <div className={AboutClasses.bottom}>
              <p>{aboutdata.text}</p>
              <ul className={AboutClasses.group_list}>
                {aboutdata && aboutdata.logos && aboutdata.logos.map((item) => (
                  <li key={item.id}>
                    <img src={item.logo} alt={`About logo ${item.id}`} />
                  </li>
                ))}
              </ul>
              <Link to={aboutdata.button_link} className={AboutClasses.btn} draggable='false'>{aboutdata.button} <IoChevronForward /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSec