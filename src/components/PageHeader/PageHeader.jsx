import React from 'react'
import PageHeaderClasses from './PageHeader.module.scss'

const PageHeader = ({ banner, title, isContactPage }) => {
    return (
        <>
            <section className={PageHeaderClasses.page_header}>
                <div className={PageHeaderClasses.banner}>
                    <img src={banner} alt="Header Banner" />
                    <h2 className={PageHeaderClasses.title}>{title}</h2>
                </div>
            </section>
        </>
    )
}

export default PageHeader