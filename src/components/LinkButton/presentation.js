import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon, Text, Button } from 'components';

const LinkButton = ({
  className,
  children,
  iconLeft,
  iconRight,
  onClick,
  text,
  to,
  variant
}) => (
  <Button
    onClick={onClick}
    to={to}
    variant="no-style"
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
      {text ? <Text size="cta">{text}</Text> : <div>{children}</div>}
    </div>

    {iconRight ? (
      <div className="LinkButton__icon col-1 text-right">
        <Icon icon={iconRight} />
      </div>
    ) : null}
  </Button>
);

export default LinkButton;
