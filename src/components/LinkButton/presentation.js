import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from 'components';

const LinkButton = ({ className, children, iconLeft, iconRight, variant }) => {
  return (
    <div
      className={cx(
        'LinkButton flex w100 bg-color-white shadow-sm radius-md m_5 p_5',
        className,
        {
          'LinkButton--primary': variant === 'primary'
        }
      )}
    >
      {iconLeft ? (
        <div className="LinkButton__icon-left">
          <Icon icon={iconLeft} />
        </div>
      ) : null}

      {children}

      {iconRight ? (
        <div className="LinkButton__icon-right">
          <Icon icon={iconRight} />
        </div>
      ) : null}
    </div>
  );
};

LinkButton.PropTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  variant: PropTypes.string
};

LinkButton.defaultProps = {
  arrow: true,
  className: '',
  children: null,
  iconLeft: null,
  iconRight: 'Right',
  variant: 'primary'
};

export default LinkButton;
