import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './services.scss'
import Cards from '../../components/Cards/Cards'

const Services = () => {
  const [servicedata, setServiceData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/services_page')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response not ok");
        }
        return response.json()
      })
      .then((data) => {
        setServiceData(data)
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


  if (!servicedata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={servicedata.banner} title={servicedata.title} />
      <section className="Services_cards">
        <div className="container">
          <div className="cards">
            {
              servicedata && servicedata.services_cards && servicedata.services_cards.map((item) => (
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