import React, { Suspense, useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router'
import Loading from './components/Loading/Loading';
const MainLayout = React.lazy(() => import('./layouts/MainLayout/MainLayout'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Services = React.lazy(() => import('./pages/Services/Services'));
const ServicesDetails = React.lazy(() => import('./pages/Services/ServicesDetails/ServicesDetails'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const ProjectDetails = React.lazy(() => import('./pages/Projects/ProjectsDetails/ProjectDetails'));
const Blogs = React.lazy(() => import('./pages/Blogs/Blogs'));
const BlogDetails = React.lazy(() => import('./pages/Blogs/BlogsDetails/BlogDetails'));
const About = React.lazy(() => import('./pages/About/About'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index path='/' element={<Home />} />

            <Route path='/Services'>
              <Route index element={<Services />} />
              <Route path="/Services/:detailId" element={<ServicesDetails />} />
            </Route>

            <Route path='/Projects'>
              <Route index element={<Projects />} />
              <Route path="/Projects/:detailId" element={<ProjectDetails />} />
            </Route>

            <Route path='/Blogs'>
              <Route index element={<Blogs />} />
              <Route path="/Blogs/:detailId" element={<BlogDetails />} />
            </Route>

            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
