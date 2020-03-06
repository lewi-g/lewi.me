import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import Head from '../components/head'
import lewi2020 from '../../static/lewi2020.jpeg'
import lewi2020c from '../../static/lewi2020copy.png'

const imgStyle = {
  height: "60vh",
  width: "100%",
  maxWidth:'750px',
  backgroundImage: `url(${lewi2020c})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginBottom: "2rem",
}


function IndexPage() {
  return (
    <Layout>
      <Head title="Home"/>
      <div role="img" aria-label="Lewi headshot" style={imgStyle}>
      </div>
      <h1>Hello!</h1>
      <h2>I'm Lewi, a full-stack developer, community builder and educator living in NYC.</h2> 
      <p>Need a developer?  <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}
export default IndexPage