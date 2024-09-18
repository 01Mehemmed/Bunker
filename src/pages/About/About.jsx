import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import AboutClasses from './about.module.css'

const About = () => {
  const [aboutdata, setAboutData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/about_page')
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

  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>Error: {error}</p>;
  }


  if (!aboutdata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={aboutdata.about_banner} title={aboutdata.title} />
      <section className={AboutClasses.about}>
        <div className={AboutClasses.container}>
          <div className={AboutClasses.about_description}>
            <div className={AboutClasses.about_image}>
              <img src={aboutdata.image} alt="About Image" />
            </div>
            <div className={AboutClasses.about_content}>
              <div className={AboutClasses.content_title}>
                <h3>{aboutdata.title}</h3>
                <h4>{aboutdata.content_description}</h4>
              </div>
              <div className={AboutClasses.content_text}>
                <p>
                  {aboutdata.content_text}
                </p>
              </div>
            </div>
          </div>
          <div className={AboutClasses.about_cards}>
            <div className={AboutClasses.cards_title}>
              <h3>
                {aboutdata.cards_title}
              </h3>
            </div>
            <div className={AboutClasses.cards}>
              {
                aboutdata?.about_cards?.map((item) => (
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