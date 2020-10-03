/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/';


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header siteTitle="blackartisans" />
      <div>
        <main>{children}</main>
        <footer className="footer">
          <div className="footerWrapper">
            <div>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org" target="_blank">
                Gatsby
              </a>{' '}
              by{' '}
              <a href="https://www.aylinmarie.co" target="_blank">
                Aylin Marie
              </a>
            </div>
            <nav className="footerNav">
              <a href="/privacy">Privacy Policy</a>
              <a href="/accessibility">Accessibility</a>
            </nav>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
