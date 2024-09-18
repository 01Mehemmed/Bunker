import React, { useContext, useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './services.scss'
import Cards from '../../components/Cards/Cards'
import { DataContext } from '../../DataContext/DataContext'

const Services = () => {

  const { servicepagedata, loading, error } = useContext(DataContext)

  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>Error: {error}</p>;
  }


  if (!servicepagedata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={servicepagedata.banner} title={servicepagedata.title} />
      <section className="Services_cards">
        <div className="container">
          <div className="cards">
            {
              servicepagedata && servicepagedata.services_cards && servicepagedata.services_cards.map((item) => (
                <Cards
                  key={item.id}
                  CardsImg={item.image}
                  title={item.description}
                  button={item.button}
                  button_path={`/services/${item.id}`}
                />
              ))
            }


          </div>
        </div>
      </section>
    </>
  )
}

export default Services