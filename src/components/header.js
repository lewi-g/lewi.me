import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'


import headerStyles from './header.module.scss'

function Header(){
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <header className={headerStyles.header}>
      <h1> 
        <Link className={headerStyles.title}to='/'>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/about" activeClassName={headerStyles.activeNavItem}>
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/projects" activeClassName={headerStyles.activeNavItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header