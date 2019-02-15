import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Card = React.memo(({ className, children }) => (
  <div
    className={cx(
      'Card flex flex-col flex-wrap bg-color-white-overlay shadow-md radius-md overflow-hidden',
      className
    )}
  >
    {children}
  </div>
));

Card.PropTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Card.defaultProps = {
  className: '',
  children: null
};

export default Card;
