import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Background from '../../../public/media/images/Vector.png'
import ContactUsSec from '../../components/Contact us/ContactUsSec'

import ContactClasses from './contact.module.css'

const Contact = () => {

  const [contactdata, setContactData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/contact_page')
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

  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>Error: {error}</p>;
  }


  if (!contactdata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={contactdata.banner} title={contactdata.title} />
      <ContactUsSec />
      <section className={ContactClasses.contact_us}>
        <div className={ContactClasses.page_background}>
          <img src={Background} alt="Page Background" />
        </div>
        <div className={ContactClasses.container}>
          <div className={ContactClasses.contact_title}>
            <h2>{contactdata.cards_title}</h2>
          </div>
          <div className={ContactClasses.wrapper}>
            {
              contactdata?.contact_cards?.map((item) => (
                <div className={ContactClasses.card} key={item.id}>
                  <img src={item.image} />
                  <div className={ContactClasses.info}>
                    <h2>{item.team}</h2>
                    <p>{item.mail}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* <div className={ContactClasses.page_background}>
          <img src={Background} alt="Page Background" />
        </div> */}
      </section>
    </>
  )
}

export default Contact