import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Card = ({ className, children }) => {
  return (
    <div
      className={cx(
        'Card flex flex-wrap bg-color-white-overlay shadow-sm radius-md m_5 p_5',
        className
      )}
    >
      {children}
    </div>
  );
};

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
