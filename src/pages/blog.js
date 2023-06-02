import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

function Blog({ data }) {
  const nodes = data.allMdx.nodes

  return (
    <Layout pageTitle='My Blog Posts'>
      {nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      excerpt
      id
    }
  }
}
`

export const Head = () => <Seo title='My Blog Posts' />

export default Blog