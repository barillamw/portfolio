import React from 'react'
import PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import GlobalStateProvider from "../context/provider"
import Hero from "../components/hero"

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index.edges[0].node
  const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter

  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  }

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <Hero content={data.hero.edges} />
        <h1>{seoTitle}</h1>
        <p>{data.index.edges[0].node.body}</p>
      </Layout>
    </GlobalStateProvider>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    index: allMdx(filter: {internal: {contentFilePath: {regex: "/index/index/"}}}){
      edges {
        node {
          frontmatter {
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
          body
        }
      }
    }
    hero:allMdx(filter: {internal: {contentFilePath: {regex: "/index/hero/"}}}){
      edges {
        node {
          body
          frontmatter {
            greetings
            title
            subtitlePrefix
            subtitle
            icon {
              childImageSharp {
                fluid(maxWidth: 60, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`