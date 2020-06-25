import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContainer from "../components/blog-container"
import BlogPosts from "../components/blog-posts"

const Home = ({ data }) => (
  <Layout>
    <BlogContainer>
      <SEO title="Inicio - Bienvenid@s" />
      <h1>Así que vamos a intentarlo una vez más</h1>
      <p>Sean bienvenidos a asdrome.digital</p>
      <p>El futuro... Es hoy</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <BlogPosts />
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
