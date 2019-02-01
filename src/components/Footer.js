'use-strict';
import React, { Component } from 'react';
import { FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="row">
        <div className="Footer__social">
          <a href="https://twitter.com/RentAfito"><FaTwitter size="2em" /></a>
          <a href="https://www.facebook.com/RentAfito"><FaFacebookSquare size="2em" /></a>
          <a href="https://www.instagram.com/rentafito/"><FaInstagram size="2em" /></a>
        </div>
      </div>
      <hr />
      <div className="row">
        <a href="https://afito.com"><div>&copy; {new Date().getFullYear()} Afito</div></a>
      </div>
    </footer>
  );
}

export default Footer;
