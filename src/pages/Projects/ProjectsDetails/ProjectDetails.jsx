import React, { useEffect, useState } from 'react'
import PageHeader from '../../../components/PageHeader/PageHeader'
import { useParams } from 'react-router';
import DetailCLasses from './projectdetails.module.css'
import { Link } from 'react-router-dom';
import { FaCubesStacked } from 'react-icons/fa6';

const ProjectDetails = () => {
    const { detailId } = useParams(); // detailId string gelir

    const [prodetail, setProDetail] = useState({}); // Proje verilerini saklamak için
    const [loading, setLoading] = useState(true); // Yüklenme durumunu izlemek için
    const [error, setError] = useState(null); // Hata yakalamak için

    useEffect(() => {
        fetch('http://localhost:3001/projects_page') // API çağrısı
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json();
            })
            .then((data) => {
                setProDetail(data); // Veriyi set et
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const selectedproject = prodetail.project_details?.find(item => item.id == detailId);

    // prev and btn
    const currentIndex = prodetail.project_details?.findIndex((item) => item.id == detailId);

    const prevProject = prodetail.project_details[currentIndex - 1];
    const nextProject = prodetail.project_details[currentIndex + 1];

    return (
        <>
            <PageHeader banner={prodetail.banner} title={prodetail.title} />
            <section className={DetailCLasses.project_details}>
                <div className={DetailCLasses.container}>
                    <div className={DetailCLasses.content}>
                        <div className={DetailCLasses.image}>
                            <img src={selectedproject?.image} alt="Detail Image" />
                        </div>
                        <div className={DetailCLasses.details_content}>
                            <h3>{selectedproject?.title}</h3>
                            <p>{selectedproject?.details}</p>
                        </div>
                        <div className={DetailCLasses.bottom_transiton}>
                            <ul>
                                <li>
                                    {prevProject ? (
                                        <Link to={`/projects/${prevProject.id}`}>
                                            <button>{selectedproject.prev_btn}</button>
                                        </Link>
                                    ) : (
                                        <button disabled>{selectedproject.prev_btn}</button>
                                    )}
                                    {prevProject && <p>{prevProject.title}</p>}
                                </li>
                                <li>
                                    <FaCubesStacked />
                                </li>
                                <li>
                                    {nextProject ? (
                                        <Link to={`/projects/${nextProject.id}`}>
                                            <button>{selectedproject.next_btn}</button>
                                        </Link>
                                    ) : (
                                        <button disabled>{selectedproject.next_btn}</button>
                                    )}
                                    {nextProject && <p>{nextProject.title}</p>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={DetailCLasses.detail_list}>
                        <ul>
                            {
                                selectedproject?.detail_list?.map((item) => (
                                    <li key={item.id}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectDetails;
