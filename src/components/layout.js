import * as React from 'react'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'
import { container, content } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Header />
      <main className={content}>
        {pageTitle ? <h1>{pageTitle}</h1> : null}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
