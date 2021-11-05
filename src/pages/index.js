import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Headshot from '../components/headshot'

function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />
      <Headshot />
      <h1>Hello!</h1>
      <h2>
        I'm Lewi, a full-stack developer, community builder and educator living
        in Philadelphia
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
