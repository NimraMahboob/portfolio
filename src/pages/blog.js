import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function Blog({ data }) {
  const nodes = data.allFile.nodes

  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
}
`

export const Head = () => <Seo title='My Blog Posts' />

export default Blog