import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { socialLinks, linkItem } from './footer.module.css'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          instagram
          linkedIn
        }
      }
    }
  `)
  const { github, instagram, linkedIn } = data.site.siteMetadata
  return (
    <footer>
      <ul className={socialLinks}>
        <li>
          <a className={linkItem} href={github}>
            Github
          </a>
        </li>
        <li>
          <a className={linkItem} href={instagram}>
            Instagram
          </a>
        </li>
        <li>
          <a className={linkItem} href={linkedIn}>
            LinkedIn
          </a>
        </li>
        <li>
          <a className={linkItem} href="">
            Email
          </a>
        </li>
      </ul>
      <p>created by Lewi Gilamichael</p>
    </footer>
  )
}

export default Footer
