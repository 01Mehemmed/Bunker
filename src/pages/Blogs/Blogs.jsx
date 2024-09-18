import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './blogs.css'
import Cards from '../../components/Cards/Cards'

const Projects = () => {
  const [blogdata, setBlogData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/blogs_page')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response not ok");
        }
        return response.json()
      })
      .then((data) => {
        setBlogData(data)
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


  if (!blogdata) {
    return <p>No data found.</p>;
  }
  return (
    <>
      <PageHeader banner={blogdata.banner} title={blogdata.title} />
      <section className="projects_cards">
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