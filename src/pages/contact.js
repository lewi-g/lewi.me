import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

function ContactPage(){
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Contact Me</h1>
      <p> The best way to reach me is via email at <a href="mailto: lewi.dev@gmail.com">lewi.dev@gmail.com</a></p>     
    </Layout>
  )
}

export default ContactPage