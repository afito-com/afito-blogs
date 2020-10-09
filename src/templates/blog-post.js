import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FaTwitter, FaInstagram, FaFacebookSquare, FaMedium } from 'react-icons/fa';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import './blog-post.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post;
    const siteTitle = post.document.title;
    const { previous, next } = this.props.pageContext;
    console.log({ post });
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.document.title}
          description={post.childMarkdownRemark.excerpt}
          image={post.childMarkdownRemark.frontmatter.cover.childImageSharp.fluid.src}
        />
        <Image className="Post__img container" fluid={post.frontmatter.cover.childImageSharp.fluid} alt="Cover" />
        <div className="Post container">
          <div className="row">
            <div className="col--xs--12">
              <h1 className="Post__title">{post.frontmatter.title}</h1>
              <p>
                {!!post.childMarkdownRemark.frontmatter.author && (
                  <span className="Post__author">{post.frontmatter.author}&nbsp;</span>
                )}
                {!!post.childMarkdownRemark.frontmatter.date && (
                  <span className="Post__published">{post.frontmatter.date}</span>
                )}
              </p>
              <div className="Post__social">
                {!!post.childMarkdownRemark.frontmatter.medium && (
                  <a href={post.childMarkdownRemark.frontmatter.medium}>
                    <FaMedium size="1.5em" />
                  </a>
                )}
                {!!post.childMarkdownRemark.frontmatter.twitter && (
                  <a href={post.childMarkdownRemark.frontmatter.twitter}>
                    <FaTwitter size="1.5em" />
                  </a>
                )}
                {!!post.childMarkdownRemark.frontmatter.instagram && (
                  <a href={post.childMarkdownRemark.frontmatter.instagram}>
                    <FaInstagram size="1.5em" />
                  </a>
                )}
                {!!post.childMarkdownRemark.frontmatter.facebook && (
                  <a href={post.childMarkdownRemark.frontmatter.facebook}>
                    <FaFacebookSquare size="1.5em" />
                  </a>
                )}
              </div>
              <div className="Content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <div className="Post__footer">
            <div className="row">
              {previous && (
                <Link className="col--xs--4" to={previous.fields.slug} rel="prev">
                  <Image
                    className="Story__img"
                    fluid={previous.frontmatter.cover.childImageSharp.fluid}
                    alt={previous.fields.slug}
                  />
                  <h6>{previous.frontmatter.title}</h6>
                </Link>
              )}
              <div className={previous ? 'col--xs--4' : 'col--xs--8'} />
              {next && new Date(next.frontmatter.date) < new Date() && (
                <Link
                  className="col--xs--4"
                  to={next.fields.slug}
                  rel="next"
                  style={{ alignItems: 'flex-end', textAlign: 'right' }}
                >
                  <Image
                    className="Story__img"
                    fluid={next.frontmatter.cover.childImageSharp.fluid}
                    alt={next.fields.slug}
                  />
                  <h6>{next.frontmatter.title}</h6>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const query = graphql`
  query($path: String) {
    post: googleDocs(document: { path: { eq: $path } }) {
      document {
        title
        date
        cover {
          image {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      childMarkdownRemark {
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
        }
      }
    }
  }
`;
