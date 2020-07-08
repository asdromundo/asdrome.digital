import React from "react"
import Layout from "../components/layout"
import BlogContainer from "../components/blog-container"

export default function About() {
  return (
    <Layout>
      <BlogContainer>
        <div style={{ color: `teal` }}>
          <h1>About Gatsby</h1>
          <p>Such wow. Very React.</p>
        </div>
      </BlogContainer>
    </Layout>
  )
}
