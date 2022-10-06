import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const SEO = ({ pageTitle, description, children }) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata()

  const seo = {
    title: defaultTitle,
    description: description || defaultDescription,
  }

  return (
    <>
      {pageTitle ? (
        <title>{`${seo.title} | ${pageTitle}`}</title>
      ) : (
        <title>{seo.title}</title>
      )}

      <meta name="description" content={seo.description} />
      {children}
    </>
  )
}

export default SEO
