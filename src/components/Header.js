'use-strict';
import React, { Component } from 'react';
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
              <div className="row">
                <div className="col--xs--12">
                  <Link to={'/'} style={{ width: '165px' }}>
                    <Image
                      fluid={data.avatar.childImageSharp.fluid}
                      alt="Logo"
                      fadeIn={false}
                    />
                  </Link>
                </div>
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
