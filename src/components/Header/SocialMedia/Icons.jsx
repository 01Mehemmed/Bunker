import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './icons.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { DataContext } from '../../../DataContext/DataContext';

const Icons = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    
    const { linkdata, loading, error } = useContext(DataContext)

    if (loading) {
        return <p>Loading...</p>;
    }


    if (error) {
        return <p>Error: {error}</p>;
    }


    if (!linkdata) {
        return <p>No data found.</p>;
    }

    return (
        <div className="mainbox">
            <input type="checkbox" id="check" checked={isChecked} onChange={handleToggle} />
            <label onClick={handleToggle} className='icon_label'>
                {isChecked ? 'Cancel' : 'Share'}
            </label>
            <div className={`media-icons ${isChecked ? 'active' : ''}`}>
                <Link to={linkdata.face_link} target="_blank"><FaFacebookF className='face' /></Link>
                <Link to={linkdata.insta_link} target="_blank"><FaInstagram className='insta' /></Link>
                <Link to={linkdata.tiktok_link} target="_blank"><FaTiktok className='tiktok' /></Link>
                <Link to={linkdata.x_link} target="_blank"><FaXTwitter className='x' /></Link>
                <Link to={linkdata.youtube_link} target="_blank"><FaYoutube className='youtube' /></Link>
            </div>
        </div>
    );
};

export default Icons;
