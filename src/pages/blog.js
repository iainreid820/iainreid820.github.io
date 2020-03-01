import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import CardColumn from "../components/CardColumn"
import Layout from "../components/Layout"
import Title from "../components/Title"

const Disabled = styled("div")`
  opacity: 0.8;
  pointer-events: none;
`

const Blog = ({ posts }) => <>
  <Layout>
    <Title text="Blog" />

    {posts.map((post, i) => (
      !post.node.frontmatter.draft
        ? (
          <Link key={i} to={`blog/${post.node.fields.slug}`}>
            <CardColumn
              category={post.node.frontmatter.category}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              description={post.node.excerpt}
              thumbnail={post.node.frontmatter.featuredImage?.sourceUrl.childImageSharp.fluid}
              actionText="Read"
            />
          </Link>
        )
        : (
          <Disabled key={i}>
            <CardColumn
              category={post.node.frontmatter.category}
              title="Coming soon…"
              date={post.node.frontmatter.date}
              description={post.node.frontmatter.title}
              thumbnail={post.node.frontmatter.featuredImage?.sourceUrl.childImageSharp.fluid}
            />
          </Disabled>
        )
    ))}
  </Layout>
</>

export default ({ data }) => {
  const posts = data.allPosts.edges
  const meta = data.site.siteMetadata

  return <Blog posts={posts} meta={meta} />
}

export const pageQuery = graphql`
  query {
    allPosts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
            draft
            category
            featuredImage {
              sourceUrl {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }

    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
