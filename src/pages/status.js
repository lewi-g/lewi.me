import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const StatusHistory = () => {
  return (
    <Layout pageTitle="Status History">
      <p>
        Here will go all the different statuses from my past, arranged by date.
      </p>
    </Layout>
  )
}

export default StatusHistory

export const Head = () => <SEO pageTitle="Status History" />
