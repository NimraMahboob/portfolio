import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import {container,heading,navLinks,navLinkItem,navLinkText,siteTitle
} from './layout.module.css'

function Layout({ pageTitle, children }) {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
    }`)

    const {title} = data.site.siteMetadata

    return (
        <div className={container}>
            <header className={siteTitle}>{title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/'>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout