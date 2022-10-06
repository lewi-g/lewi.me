import * as React from 'react'
import { Link } from 'gatsby'
import { header, navList, activeNavItem, navItem } from './header.module.css'

const Header = () => {
  return (
    <header className={header}>
      <div>
        <Link className={navItem} to="/">
          Lewi
        </Link>
      </div>
      <nav>
        <ul className={navList}>
          <li>
            <Link
              activeClassName={activeNavItem}
              className={navItem}
              to="/about"
            >
              Web Developer
            </Link>
          </li>
          <li>
            <Link
              activeClassName={activeNavItem}
              className={navItem}
              to="/dance"
            >
              Dancer
            </Link>
          </li>
          <li>
            <Link
              activeClassName={activeNavItem}
              className={navItem}
              to="/blog"
            >
              Thinker
            </Link>
          </li>
          <li>
            <Link
              activeClassName={activeNavItem}
              className={navItem}
              to="/status"
            >
              Status History
            </Link>
          </li>
          <li>
            <a
              activeClassName={activeNavItem}
              className={navItem}
              href="/resume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
