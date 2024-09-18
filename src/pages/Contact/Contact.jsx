import React, { useContext, useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import ContactUsSec from '../../components/Contact us/ContactUsSec'

import ContactClasses from './contact.module.scss'
import { DataContext } from '../../DataContext/DataContext'

const Contact = () => {
  const { contactpagedata, loading, error } = useContext(DataContext)


  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>Error: {error}</p>;
  }


  if (!contactpagedata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={contactpagedata.banner} title={contactpagedata.title} />
      <ContactUsSec />
      <section className={ContactClasses.contact_us}>
        <div className={ContactClasses.page_background}>
          <img src={contactpagedata.vector_img} alt="Page Background" />
        </div>
        <div className={ContactClasses.container}>
          <div className={ContactClasses.contact_title}>
            <h2>{contactpagedata.cards_title}</h2>
          </div>
          <div className={ContactClasses.wrapper}>
            {
              contactpagedata?.contact_cards?.map((item) => (
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
      </section>
    </>
  )
}

export default Contact