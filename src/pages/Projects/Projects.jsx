import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './projects.css'
import Cards from '../../components/Cards/Cards'

const Projects = () => {
  const [projectsdata, setProjectsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/projects_page')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response not ok");
        }
        return response.json()
      })
      .then((data) => {
        setProjectsData(data)
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


  if (!projectsdata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={projectsdata.banner} title={projectsdata.title} />
      <section className="projects_cards">
        <div className="container">
          <div className="cards">
            {
              projectsdata?.project_cards?.map((item) => (
                <Cards
                  key={item.id}
                  CardsImg={item.image}
                  button={item.button}
                  button_path={`/projects/${item.id}`}
                />
              ))
            }


          </div>
        </div>
      </section>
    </>
  )
}

export default Projects