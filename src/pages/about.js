import React, { useState, useEffect } from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

function AboutPage(){
  return (
    <Layout>
      <Head title="About"/>
      <section id="basics">
        <h2>About Me</h2>
        <p>I have written end-to-end tests for an in-house sales tracking app using Cypress. I have ran summer camps teaching HTML, CSS and JS to children ages 7 to 14.
         I am excited about exploring opportunities to grow as a software developer.</p>
        <p>In my free time I enjoy cooking, reading, teaching and performing swing dances and training to run a marathon in under 3 hours.</p>
        <p> <Link to="/contact">Let's chat</Link>.</p>
      </section>
    </Layout>
  )
}

export default AboutPage