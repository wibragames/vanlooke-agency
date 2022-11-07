import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Van Looke Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="Een Gatsby astronaut"
        src="../images/joaquin-profile.png"
      />
      </Layout>
    </main>
  )
}

export default IndexPage