import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContainer from "../components/blog-container"
import BlogPosts from "../components/blog-posts"
import Contact from "./contact"

const Home = ({ data }) => (
  <Layout>
    <BlogContainer>
      <SEO title="Inicio - Bienvenid@s" />
      <h1>Así que vamos a intentarlo una vez más</h1>
      <p>Sean bienvenidos a asdrome.digital</p>
      <p>El futuro... Es hoy</p>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <BlogPosts />
      <Contact />
    </BlogContainer>
  </Layout>
)

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
