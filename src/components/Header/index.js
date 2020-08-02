import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Badge } from 'shards-react';

import stylesheet from './Header.module.less';

const Header = ({ siteTitle }) => (
  <header className={stylesheet.root}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Badge theme="dark">Beta</Badge>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
