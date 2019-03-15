import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FaTwitter, FaInstagram, FaFacebookSquare, FaMedium } from 'react-icons/fa'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './blog-post.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    console.log({post})

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Image className="Post__img container" fluid={post.frontmatter.cover.childImageSharp.fluid} alt="Cover" />
        <div className="Post container">
          <div className="row">
            <div className="col--xs--12">
              <h1 className="Post__title">{post.frontmatter.title}</h1>
              <p>
                {!!post.frontmatter.author && <span className="Post__author">{post.frontmatter.author}&nbsp;</span>}
                {!!post.frontmatter.date && <span className="Post__published">{post.frontmatter.date}</span>}
              </p>
              <div className="Post__social">
                {!!post.frontmatter.medium && <a href={post.frontmatter.medium}><FaMedium size="1.5em" /></a>}
                {!!post.frontmatter.twitter && <a href={post.frontmatter.twitter}><FaTwitter size="1.5em" /></a>}
                {!!post.frontmatter.instagram && <a href={post.frontmatter.instagram}><FaInstagram size="1.5em" /></a>}
                {!!post.frontmatter.facebook && <a href={post.frontmatter.facebook}><FaFacebookSquare size="1.5em" /></a>}
              </div>
              <div className="Content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <div className="Post__footer">
            <div className="row">
                {previous && (
                  <Link className="col--xs--4" to={previous.fields.slug} rel="prev">
                      <Image className="Story__img" fluid={previous.frontmatter.cover.childImageSharp.fluid} alt={previous.fields.slug} />
                      <h6>{previous.frontmatter.title}</h6>
                  </Link>
                )}
                <div className={previous ? "col--xs--4" : "col--xs--8"}></div>
                {next && (
                  <Link className="col--xs--4" to={next.fields.slug} rel="next" style={{ alignItems: 'flex-end', textAlign: 'right' }}>
                    <Image className="Story__img" fluid={next.frontmatter.cover.childImageSharp.fluid} alt={next.fields.slug} />
                    <h6>{next.frontmatter.title}</h6>
                  </Link>
                )}
            </div>
          </div>
        </div>
      </Layout>
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
        author
        twitter
        instagram
        medium
        facebook
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 1080, maxHeight: 580) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
