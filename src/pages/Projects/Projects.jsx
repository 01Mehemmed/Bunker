import React, { useContext, useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './projects.scss'
import Cards from '../../components/Cards/Cards'
import { DataContext } from '../../DataContext/DataContext'

const Projects = () => {
  const { projectsdata, loading, error } = useContext(DataContext)


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