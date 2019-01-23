import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const LinkButton = ({ className, children, arrow, variant }) => {
  return (
    <div
      arrow={arrow}
      className={cx(
        'LinkButton flex w100 bg-color-white shadow-sm radius-md m_5 p_5',
        className,
        {
          'LinkButton--primary': variant === 'primary'
        }
      )}
    >
      {children}
    </div>
  );
};

LinkButton.PropTypes = {
  arrow: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  variant: PropTypes.string
};

LinkButton.defaultProps = {
  arrow: true,
  className: '',
  children: null,
  variant: 'primary'
};

export default LinkButton;
