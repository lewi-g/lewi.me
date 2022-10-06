import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogPage = () => {
  return (
    <Layout>
      <p>
        Here will be all the miscellaneous thoughts/observations I choose to
        write
      </p>
    </Layout>
  )
}
export default BlogPage

export const Head = () => <SEO pageTitle="Thoughts" />
