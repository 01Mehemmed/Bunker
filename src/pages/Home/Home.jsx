import React from 'react'
import Banner from '../../components/Banner/Banner'
import ProjectsSec from '../../components/Projects/ProjectsSec'
import ServicesSec from '../../components/ServicesSec/ServicesSec'
import OurPartners from '../../components/Our-Partners/OurPartners'
import ContactUsSec from '../../components/Contact us/ContactUsSec'
import AboutSec from '../../components/AboutSec/AboutSec'

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSec />
      <ProjectsSec />
      <ServicesSec />
      <OurPartners />
      <ContactUsSec />
    </>
  )
}

export default Home