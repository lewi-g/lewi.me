import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

function ProjectsPage(){
  return(
    <Layout>
      <Head title ="Projects"/>
      <h2>My projects</h2>
      <ul>
        <li> Reviewer for the <a target="_blank" href="http://graphql.guide">GraphQL Guide</a></li>
        <li><a target="_blank" href="http://output.jsbin.com/cexajiw">Tic-Tac-Toe </a> Using 2D arrays in JavaScript to compute winner.</li>
        <li> <a target="_blank" href="http://output.jsbin.com/mawotuk/"> Giphy Api Project</a> using raw JavaScript as an example for students.</li>
        <li>The updated <a target="_blank" href="http://coding.space"> Coding Space</a> curriculum site</li>
      </ul>
    </Layout>
  )
}
export default ProjectsPage