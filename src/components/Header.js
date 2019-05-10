import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import './Header.scss';

const Header = () => {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        return (
          <div className="Header">
            <div className="container">
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to={'/'} style={{ width: '165px' }}>
                  <Image
                    fluid={data.avatar.childImageSharp.fluid}
                    alt="Logo"
                    fadeIn={false}
                  />
                </Link>


                <a href="https://afito.com">Find a property</a>
              </div>
            </div>
          </div>
        )
      }}
    />
  );
}

const headerQuery = graphql`
  query HeaderQuery {
    avatar: file(absolutePath: { regex: "/logonew.png/" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default Header;
