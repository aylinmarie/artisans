import PropTypes from 'prop-types';
import React from 'react';

import stylesheet from './Card.module.less';

const Card = ({ src, alt, href, name, description, ...rest }) => (
  <div {...rest}>
    <a
      className={`caption ${stylesheet.photoLink}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img className={stylesheet.img} src={src} alt={alt} />
    </a>
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

export default Card;
