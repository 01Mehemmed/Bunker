import React, { useContext } from 'react'
import ServicesLinkClasses from './serviceslink.module.scss'
import { Link } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'
import { DataContext } from '../../../DataContext/DataContext'

const ServicesLink = () => {
  const { servicelinkdata, loading, error } = useContext(DataContext)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <div className={ServicesLinkClasses.services_link}>
        <div className={ServicesLinkClasses.container}>
          <div className={ServicesLinkClasses.left}>
            <div className={ServicesLinkClasses.icon}>
              <img src={servicelinkdata.icon} alt="Services" />
            </div>
            <div className={ServicesLinkClasses.texts}>
              <p>{servicelinkdata.text}</p>
            </div>
          </div>
          <div className={ServicesLinkClasses.right}>
            <Link to={servicelinkdata.button_link}> {servicelinkdata.button} <IoChevronForward /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesLink