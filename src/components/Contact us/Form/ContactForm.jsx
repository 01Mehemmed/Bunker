import React, { useRef, useState, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.scss';
import { DataContext } from '../../../DataContext/DataContext';

const ContactForm = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { contactdata, loading, error } = useContext(DataContext)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_55p6p3d', 'template_quyiod6', form.current, {
                publicKey: 'OogxktHWcLq1hnc4C',
            })
            .then(
                () => {
                    setSuccessMessage("Your message has been sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    setErrorMessage(`Send failed: ${error.text}`);
                    console.log(error.text);
                }
            );

    };

    // Auto-hide messages after 
    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
                setErrorMessage('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);

    return (
        <>
            <form className='input_form' ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Name' name="user_name" required />
                <input type="email" placeholder='Mail' name="user_email" required />
                <input type="number" placeholder='Phone number' name="user_number" required />
                <textarea placeholder='Enter message' name="message" required></textarea>
                <button type="submit" className="submit_btn">{contactdata.submit_btn}</button>
            </form>

            {successMessage && <div className="success_box">{successMessage}</div>}
            {errorMessage && <div className="error_box">{errorMessage}</div>}
        </>
    );
}

export default ContactForm;
