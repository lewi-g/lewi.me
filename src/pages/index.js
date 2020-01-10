import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import Head from '../components/head'
import headshot from '../../Lewi-headshot2c.jpg'
import indexStyles from './index.module.scss'


function IndexPage() {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello!</h1>
      <h2>I'm Lewi, a full-stack developer, community builder and educator living in NYC.</h2>
      <img className={indexStyles.headshot} src={headshot} alt='Lewi Gilamichael Headshot'/>
      <p>Need a developer?  <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}
export default IndexPage