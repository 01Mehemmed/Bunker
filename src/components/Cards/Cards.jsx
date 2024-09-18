import React from 'react'
import CardsClasses from './cards.module.css'
import { Link } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'


const Cards = ({ CardsImg, title, button, button_path }) => {
    return (
        <>
            <div className={CardsClasses.card}>
                <div className={CardsClasses.top}>
                    <img src={CardsImg} alt="Bunker Projects" />
                    <h5>{title}</h5>
                </div>
                <div className={CardsClasses.bottom}>
                    <Link to={button_path}>
                        <p>{button}</p>
                        <IoChevronForward />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cards