import PropTypes from 'prop-types';
import React from 'react';

import stylesheet from './Card.module.less';

const Cards = ({ children }) => {
  return <div className={stylesheet.wrapper}>{children}</div>;
};

Cards.propTypes = {
  children: PropTypes.node.isRequired,
};

const Card = ({ src, alt, href, name, description }) => (
  <div className={stylesheet.root}>
    <img src={src} alt={alt} />
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={href}>Explore {name}</a>
  </div>
);

Card.propTypes = {};

export { Card as default, Cards };
