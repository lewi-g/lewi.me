import React from 'react'
import {graphql, useStaticQuery, Link, withPrefix} from 'gatsby'
import footerStyles from './footer.module.scss'


function Footer() {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata{
          author
        }
      }

    }
  `)
  
  return (
    <footer>
      <nav className={footerStyles.navList}>   
        <li>
          <a target="_blank" rel="noopener noreferrer" 
             className={footerStyles.navItem} 
             activeClassName={footerStyles.activeNavItem}
              href="https://www.github.com/lewi-g"
            >
            GitHub
          </a> 
        </li>
        <li >
          <a 
            target="_blank" rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/lewi-g/"
            className={footerStyles.navItem} 
            activeClassName={footerStyles.activeNavItem}
            >
            LinkedIn
          </a> 
        </li>
        <li >
          <a 
            href="mailto:lewi.dev@gmail.com"
            className={footerStyles.navItem} 
            activeClassName={footerStyles.activeNavItem}
          >
            Email
          </a>
        </li>
      </nav>
      <p className={footerStyles.copyright}>Created by {data.site.siteMetadata.author}, ©2020</p>
    </footer>
  )
}

export default Footer