import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Image from 'gatsby-image';
import '../css/boost.scss';
import './index.scss';

const keywords = [
  `college housing`,
  `student housing`,
  `housing`,
  `off-campus housing`,
  `off-campus`,
  `rutgers off-campus housing`
];

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges.filter(p => new Date(p.node.frontmatter.date) < new Date());

    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" keywords={keywords} image={posts[0].node.frontmatter.cover.childImageSharp.fluid.src} />
        <div className="Homepage container">
          <div className="row">
            <div className="">
              <div className="row">
                <h5 className="col--xs--12">Featured</h5>
              </div>
              <div className="row">
                <div className="col--xs--12 col--md--8">
                  <Link className="Story" to={`/${posts[0].node.fields.slug}`}>
                    <Image
                      className="Story__img"
                      fluid={posts[0].node.frontmatter.cover.childImageSharp.fluid}
                      alt="Cover"
                    />
                  </Link>
                </div>
                <div className="col--xs--12 col--md--4">
                  <Link className="Story" to={`/${posts[0].node.fields.slug}`}>
                    <h1 className="featured-heading">{posts[0].node.frontmatter.title}</h1>
                  </Link>
                  <p>
                    <span className="light">
                      {posts[0].node.frontmatter.author}
                      <br />
                      {new Date(posts[0].node.frontmatter.date).toLocaleDateString()}
                    </span>
                  </p>
                  <p>{posts[0].node.excerpt}</p>
                </div>
              </div>
              <div className="spacer" />
              <div className="row">
                <h5 className="col--xs--12">Latest</h5>
              </div>
              <div className="row">
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug;

                  return (
                    <div className="col--xs--6 col--sm--6 col--md--4" key={node.fields.slug}>
                      <Link className="Story" to={`/${node.fields.slug}`}>
                        <Image
                          className="Story__img"
                          fluid={node.frontmatter.cover.childImageSharp.fluid}
                          alt="Cover"
                        />
                        <h4>{title}</h4>
                      </Link>
                      <p>
                        {!!node.frontmatter.author && (
                          <span className="light">
                            {node.frontmatter.author}
                            <br />
                          </span>
                        )}
                        {!!node.frontmatter.date && <span className="light">{node.frontmatter.date}</span>}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            cover {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
