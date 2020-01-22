import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

import Head from '../components/head'


function AboutPage(){
  return (
    <Layout>
      <Head title="About"/>
      <h1>About Me</h1>
      <p>I have written end-to-end tests for an in-house sales tracking app using Cypress.</p>
      <p>I have ran summer camps teaching HTML, CSS and JS to children ages 7 to 14.</p>
      <p>I’m excited about exploring opportunities to grow as a software developer.</p>
      <p> <Link to="/contact">Let's chat.</Link></p>
    </Layout>
  )
}

export default AboutPage