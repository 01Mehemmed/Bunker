import React, { useContext, useEffect, useState } from 'react';
import FooterClasses from './footer.module.scss';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { DataContext } from '../../DataContext/DataContext';

const Footer = () => {

  const { footerdata, loading, error } = useContext(DataContext)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <footer className={FooterClasses.Footer}>
        <div className={FooterClasses.container}>
          <div className={FooterClasses.pages_services}>
            <div className={FooterClasses.left}>
              <div className={FooterClasses.menu_box}>
                <h3>{footerdata.title_menu}</h3>
                <ul>
                  {footerdata.menu?.map((item) => (
                    <li key={item.id}>
                      <Link to={item.path}>{item.title} <FaChevronRight /></Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={FooterClasses.right}>
              <div className={FooterClasses.menu_box}>
                <h3>{footerdata.title_services}</h3>
                <ul>
                  {footerdata.services_menu?.map((item) => (
                    <li key={item.id}>
                      <Link to={`/services/${item.id}`}>{item.title} <FaChevronRight /></Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={FooterClasses.contact_us}>
            <div className={FooterClasses.left}>
              <div className={FooterClasses.menu_box}>
                <h3>{footerdata.title_contact}</h3>
                <ul>
                  <li><p>{footerdata.loaction}</p></li>
                  <li><span>{footerdata.number}</span></li>
                  <li><Link to="#">{footerdata.mail}</Link></li> {/* Burada Link mail için kullanılıyor */}
                </ul>
              </div>
            </div>
            <div className={FooterClasses.right}>
              <div className={FooterClasses.top}>
                <h3>{footerdata.title_social}</h3>
                <ul>
                  {footerdata.social_links && (
                    <>
                      <li><Link to={footerdata.social_links.face_link} target="_blank" className='icon icon-fill'><FaFacebookF /></Link></li>
                      <li><Link to={footerdata.social_links.insta_link} target="_blank" className='icon icon-fill'><FaInstagram /></Link></li>
                      <li><Link to={footerdata.social_links.tiktok_link} target="_blank" className='icon icon-fill'><FaTiktok /></Link></li>
                      <li><Link to={footerdata.social_links.x_link} target="_blank" className='icon icon-fill'><FaXTwitter /></Link></li>
                      <li><Link to={footerdata.social_links.youtube_link} target="_blank" className='icon icon-fill'><FaYoutube /></Link></li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={FooterClasses.Author}>
          <p>{footerdata.author_text} By <Link to="#">{footerdata.author}</Link></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
