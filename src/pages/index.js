import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import Head from '../components/head'



function IndexPage() {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello!</h1>
      <h2>I'm Lewi, a full-stack developer, community builder and educator living in NYC.</h2> 
      <p>Need a developer?  <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}
export default IndexPage