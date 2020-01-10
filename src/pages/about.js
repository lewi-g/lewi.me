import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

function AboutPage(){
  return (
    <Layout>
      <Head title="About"/>
      <h1>About Me</h1>
      <p>I am a Javascript Bootcamp grad looking for opportunities to get better as a software developer.</p>
      <p> <Link to="/contact">Want to work with me? Reach out.</Link></p>
    </Layout>
  )
}

export default AboutPage