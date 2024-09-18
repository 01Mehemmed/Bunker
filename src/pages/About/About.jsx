import React, { useContext, useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import AboutClasses from './about.module.scss'
import { DataContext } from '../../DataContext/DataContext'

const About = () => {
  const { aboutpagedata, loading, error } = useContext(DataContext)


  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>Error: {error}</p>;
  }


  if (!aboutpagedata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={aboutpagedata.about_banner} title={aboutpagedata.title} />
      <section className={AboutClasses.about}>
        <div className={AboutClasses.container}>
          <div className={AboutClasses.about_description}>
            <div className={AboutClasses.about_image}>
              <img src={aboutpagedata.image} alt="About Image" />
            </div>
            <div className={AboutClasses.about_content}>
              <div className={AboutClasses.content_title}>
                <h3>{aboutpagedata.title}</h3>
                <h4>{aboutpagedata.content_description}</h4>
              </div>
              <div className={AboutClasses.content_text}>
                <p>
                  {aboutpagedata.content_text}
                </p>
              </div>
            </div>
          </div>
          <div className={AboutClasses.about_cards}>
            <div className={AboutClasses.cards_title}>
              <h3>
                {aboutpagedata.cards_title}
              </h3>
            </div>
            <div className={AboutClasses.cards}>
              {
                aboutpagedata?.about_cards?.map((item) => (
                  <div key={item.id} className={AboutClasses.card}>
                    <div className={AboutClasses.title}>
                      <h3>{item.title}</h3>
                      <div className={AboutClasses.icon}>
                        <img src={item.icon} alt="About icon" />
                      </div>
                    </div>
                    <div className={AboutClasses.texts}>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About