import React, { useContext, useEffect, useState } from 'react'
import AboutClasses from './Banner.module.scss'
import { Link } from 'react-router-dom'
import { DataContext } from '../../DataContext/DataContext'

const Banner = () => {
  const { banner, loading, error, } = useContext(DataContext)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <section className={AboutClasses.Banner}>
        <img src={banner.image} alt="Constructor Banner" />
        <div className={AboutClasses.container}>
          <div className={AboutClasses.text_Box}>
            <h2>{banner.title}</h2>
            <h4>{banner.text}</h4>
            <Link>Make an Enquiry</Link>
          </div>

        </div>
      </section>
    </>
  )
}

export default Banner