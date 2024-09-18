import React, { useContext, useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './blogs.scss'
import Cards from '../../components/Cards/Cards'
import { DataContext } from '../../DataContext/DataContext'

const Projects = () => {
  const { blogdata, loading, error } = useContext(DataContext)

  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blogdata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={blogdata.banner} title={blogdata.title} />
      <section className="blog_cards">
        <div className="container">
          <div className="cards">
            {
              blogdata?.blogs_cards?.map((item) => (
                <Cards
                  key={item.id}
                  CardsImg={item.image}
                  button={item.button}
                  button_path={`/Blogs/${item.id}`}
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