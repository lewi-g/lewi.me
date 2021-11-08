import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

function AboutPage() {
  return (
    <Layout>
      <Head title="About" />
      <section id="basics">
        <h2>About Me</h2>
        <p>
          I'm an imperfect problem solver,{' '}
          <a href="https://www.instagram.com/spouseadventures">van-lifer</a>,
          runner, aspiring activist, expectant father and founding member of my
          second intentional community.
        </p>
        <p>
          I have written end-to-end tests for an in-house sales tracking app
          using Cypress. I have ran summer camps teaching HTML, CSS and JS to
          children ages 7 to 14. I am excited about exploring opportunities to
          grow as a software developer.
        </p>
        <p>
          In my free time I enjoy cooking, reading, running, hiking, teaching
          and performing swing dances.
        </p>
        <p>
          {' '}
          <Link to="/contact">Let's chat</Link>.
        </p>
      </section>
    </Layout>
  )
}

export default AboutPage
