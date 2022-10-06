import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const AboutPage = () => {
  return (
    <Layout>
      <p>Here will be all the things About</p>
    </Layout>
  )
}
export default AboutPage

export const Head = () => <SEO pageTitle="About" />
