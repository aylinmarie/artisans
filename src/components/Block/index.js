import PropTypes from 'prop-types';
import React from 'react';

import cx from 'classnames';
import stylesheet from './Block.module.less';

const Block = ({ children, className, ...rest }) => {
const classList = cx(stylesheet.root, className);

  return (
    <div className={cx(classList)} {...rest}>
      {children}
    </div>
  );
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Block;
