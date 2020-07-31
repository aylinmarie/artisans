import PropTypes from 'prop-types';
import React from 'react';

import stylesheet from './Card.module.less';

const Cards = ({ children }) => {
  return <div className={stylesheet.wrapper}>{children}</div>;
};

Cards.propTypes = {
  children: PropTypes.node.isRequired,
};

const Card = ({ src, alt, href, name, description, ...rest }) => (
  <div className={stylesheet.root} {...rest}>
    <img className={stylesheet.img} src={src} alt={alt} />
    <h3>{name}</h3>
    <p>{description}</p>
    <a
      className={`caption ${stylesheet.link}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      Shop this artisan
    </a>
  </div>
);

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export { Card as default, Cards };
