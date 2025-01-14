import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
// import Img from 'gatsby-image'
import { StaticImage as Img} from "gatsby-plugin-image"


import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <DefaultLayout>
        <SEO title={post.frontmatter.title} description={post.excerpt}/>
        <article className="article-page">
          <div className="page-content">
            {post.frontmatter.img && (
              <div className="page-cover-image">
                <figure>
                  <Img
                    className="page-image"
                    key={post.frontmatter.img.childImageSharp.fluid.src}
                    fluid={post.frontmatter.img.childImageSharp.fluid}
                  />
                </figure>
              </div>
            )}
            <div className="wrap-content">
              <header className="header-page">
                <h1 className="page-title">{post.frontmatter.title}</h1>
                <div className="page-date">
                  <span>{post.frontmatter.date}</span>
                </div>
              </header>
              <div dangerouslySetInnerHTML={{ __html: post.html }}/>
            </div>
          </div>
          {post.frontmatter.moral && <div className="moral">
            Moral is &nbsp; : &nbsp; &ldquo;{post.frontmatter.moral}&rdquo;
          </div>}
        </article>
      </DefaultLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY, MMM DD")
        moral
        tags
        img {
          childImageSharp {
            fluid(maxWidth: 3720) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
