import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              path
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 style={{ marginBottom: `1rem` }}>
            <Link to={`${node.frontmatter.path}`}>{node.frontmatter.title} </Link>
            <span
              style={{
                
              }}
            >
              - {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </>
  )
}

export default BlogPosts
