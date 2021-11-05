import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

function ProjectsPage() {
  return (
    <Layout>
      <Head title="Projects" />
      <h2>My projects</h2>
      <ul>
        <li>
          <a
            href="https://instargam.com/spouseadventures"
            target="_blank"
            rel="noopener noreferrer"
          >
            Building out our van
          </a>
          : carpentry, electrical and plumbing
        </li>
        <li>
          <a
            href="https://lewi-g.github.io/movie-search/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Movie Search
          </a>{' '}
          using React Hooks
        </li>
        <li>
          <a href="https://www.github.com/lewi-g/thinxTest">thinxTest:</a> basic
          testing using{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cypress.io"
          >
            Cypress
          </a>{' '}
          for{' '}
          <a rel="noopener noreferrer" href="https://www.shethinx.com">
            Thinx
          </a>
          .
        </li>
        <li>
          Reviewer for the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://graphql.guide"
          >
            GraphQL Guide
          </a>
          .
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://output.jsbin.com/cexajiw"
          >
            Tic-Tac-Toe{' '}
          </a>{' '}
          Using 2D arrays in JavaScript to compute winner.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://output.jsbin.com/mawotuk/"
          >
            Giphy Api Project
          </a>{' '}
          using raw JavaScript as an example for students.
        </li>
        <li>
          The updated{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://coding.space"
          >
            Coding Space
          </a>{' '}
          curriculum site
        </li>
      </ul>
    </Layout>
  )
}
export default ProjectsPage
