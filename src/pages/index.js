import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../styles/global.css'

function IndexPage() {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
      src='../images/image-5.jpg'
      alt='flower-image'
      />
    </Layout>
  )
}

export const Head = () => <Seo title='Home Page'/>

export default IndexPage