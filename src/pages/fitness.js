import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const FitnessPage = () => {
  return (
    <Layout>
      <p>Here will be all the things Fitness</p>
      <ul>
        <li>What counts as fitness</li>
        <li>How I approach fitness</li>
        <li>How I measure my fitness</li>
      </ul>
    </Layout>
  )
}
export default FitnessPage

export const Head = () => <SEO pageTitle="Fitness" />
