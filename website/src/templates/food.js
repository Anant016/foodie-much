import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiFoodGalleries.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiFoodGalleries.author}`}>
        {data.strapiFoodGalleries.author}
      </Link>
    </p>
    <Img fixed={data.strapiFoodGalleries.foodimage.childImageSharp.fixed} />
    <p>{data.strapiFoodGalleries.description}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiFoodGalleries(id: { eq: $id }) {
      title
      description
      foodimage {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author
    }
  }
`
