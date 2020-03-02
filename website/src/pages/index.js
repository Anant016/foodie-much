import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    {/* <SEO title="Home" /> */}
    {/* <h1>Hi people</h1> */}
    <ul>
      {data.allStrapiFoodGalleries.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <Img fixed={document.node.foodimage.childImageSharp.fixed} />
          <p>{document.node.description}</p>
          <hr />
        </li>
      ))}
    </ul>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiFoodGalleries {
      edges {
        node {
          id
          foodimage {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          description
        }
      }
    }
  }
`
