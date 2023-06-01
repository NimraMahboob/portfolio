import { Link } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'

function AboutPage() {
  return (
    <Layout pageTitle='About page'>
        <p>This is website created from gatsby documentation</p>
    </Layout>
  )
}

export const Head = () => <Seo title='About Page'/>

export default AboutPage