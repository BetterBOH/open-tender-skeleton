import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon, Text } from 'components';

const LinkButton = ({
  className,
  children,
  iconLeft,
  iconRight,
  variant,
  text
}) => {
  return (
    <div
      className={cx(
        'LinkButton flex items-center w100 bg-color-white shadow-sm radius-md m_5 py_5 px1',
        className,
        {
          'LinkButton--primary': variant === 'primary'
        }
      )}
    >
      {iconLeft ? (
        <div className="LinkButton__icon col-1">
          <Icon icon={iconLeft} />
        </div>
      ) : null}

      <div
        className={cx('px1', {
          'col-10': iconLeft && iconRight,
          'col-11': (!iconLeft && iconRight) || (iconLeft && !iconRight),
          'col-12': !iconLeft && !iconRight
        })}
      >
        {text ? <Text>{text}</Text> : <div>{children}</div>}
      </div>

      {iconRight ? (
        <div className="LinkButton__icon col-1">
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
  variant: PropTypes.string,
  text: PropTypes.string
};

LinkButton.defaultProps = {
  arrow: true,
  className: '',
  children: null,
  iconLeft: null,
  iconRight: 'Right',
  variant: 'primary',
  text: ''
};

export default LinkButton;
