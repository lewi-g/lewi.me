import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <h1>I am Lewi</h1>
      <p>swing dancer, fitness enthusiast, web developer</p>

      <h2>Current Status</h2>
      <p>
        <b>Employment:</b> Actively looking.
      </p>
      <p>
        <b>Reading:</b> The Culture Code by Daniel Coyle.
      </p>
      <p>
        <b>Personal:</b> Juggling parenthood and life.
      </p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />
