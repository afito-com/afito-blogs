import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'
import './Footer.scss';

const Footer = () => {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        return (
          <footer className="Footer">
            <div className="container" style={{ width: "100%" }}>
              <div className="row">
                <div className="col--xs--12 col--lg--6">
                  <Link to={'/'}>
                    <Image
                      fluid={data.avatar.childImageSharp.fluid}
                      alt="Logo"
                      fadeIn={false}
                      className="Footer__logo"
                    />
                  </Link>
                  <h5 style={{ margin: "20px 0 0 0" }}>A better place for students.</h5>
                  <div className="row" style={{ margin: "40px 0" }}>
                    <a style={{ paddingRight: "16px" }} href="https://www.facebook.com/RentAfito"><FaFacebookSquare size="1.5em" /></a>
                    <a style={{ paddingRight: "16px" }} href="https://www.instagram.com/rent_afito/"><FaInstagram size="1.5em" /></a>
                    <a style={{ paddingRight: "16px" }} href="https://twitter.com/RentAfito"><FaTwitter size="1.5em" /></a>
                    <a style={{ paddingRight: "16px" }} href="https://www.linkedin.com/company/afito/"><FaLinkedin size="1.5em" /></a>
                  </div>
                </div>
                <div className="col--xs--6 col--lg--3">
                  <h5>Company</h5>
                  <a href="https://afito.com/about">About</a>
                  <a href="https://blog.afito.com">Blog</a>
                  <a href="mailto:support@afito.com">Contact</a>
                </div>
                <div className="col--xs--6 col--lg--3">
                  <h5>Legal</h5>
                  <a href="https://afito.com/privacy">Privacy Policy</a>
                  <a href="https://afito.com/terms">Terms</a>
                </div>
                <div className="row" style={{ marginTop: "50px" }}>
                  <div className="col--xs--12 col--lg--12">
                    <span>&copy; {new Date().getFullYear()} Afito</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
      }}
    />
  );
}

const footerQuery = graphql`
  query FooterQuery {
    avatar: file(absolutePath: { regex: "/footerlogo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default Footer;
