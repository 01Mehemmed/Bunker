import React, { useContext, useEffect, useState } from 'react';
import PageHeader from '../../../components/PageHeader/PageHeader';
import Detailclasses from './servicesdetail.module.scss';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../../DataContext/DataContext';

const ServicesDetails = () => {
  const { detailId } = useParams();

  const { servicedetaildata, loading, error } = useContext(DataContext )

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const selectedService = servicedetaildata.service_details?.find(item => item.id === detailId);

  return (
    <>
      <PageHeader banner={servicedetaildata.detail_banner} title={selectedService.title || "Service Details"} />
      <section className={Detailclasses.services_details}>
        <div className={Detailclasses.container}>
          <aside className={Detailclasses.sidebar}>
            <ul className={Detailclasses.menu}>
              {servicedetaildata.sidebar?.map((item) => (
                <li key={item.id}>
                  <NavLink to={`/services/${item.id}`} className={({ isActive }) => (isActive ? 'active' : '')}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </aside>
          <div className={Detailclasses.content}>
            <div className={Detailclasses.detail_image}>
              <img src={selectedService.image} alt="Detail Image" />
            </div>
            <div className={Detailclasses.details_content}>
              <div className={Detailclasses.details_title}>
                <h2>{selectedService.title}</h2>
              </div>
              <div className={Detailclasses.detail_paragraph}>
                <p>{selectedService.details}</p>
              </div>
            </div>
            <div className={Detailclasses.quality_list}>
              <ul>
                {selectedService.quality_list?.map((item) => (
                  <li key={item.id}>
                    <div className={Detailclasses.detail_icon}>
                      <img src={item.icon} alt="Detail Icon" />
                    </div>
                    <h3>{item.title}</h3>
                  </li>
                ))

                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetails;
