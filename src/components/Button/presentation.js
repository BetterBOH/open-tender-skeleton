import React from 'react';
import cx from 'classnames';

import { Link } from 'react-router-dom';

const Button = React.memo(({
  onClick,
  variant,
  className,
  children,
  linkIsExternal,
  text,
  to,
  type,
  isDisabled,
  disabledClassName
}) => {
  const classes = cx(
    'Button',
    `Button--${variant}`,
    {
      [disabledClassName]: isDisabled
    },
    className
  );

    if (to) {
      if (linkIsExternal) {
        return (
          <a href={to} target="_blank" rel="noopener">
            <div className={classes}>{text ? text : children}</div>
          </a>
        );
      } else {
        return (
          <Link to={to}>
            <div className={classes}>{text ? text : children}</div>
          </Link>
        );
      }
    }

    return (
      <button className={classes} onClick={onClick} type={type}>
        {text ? text : children}
      </button>
    );
  }
);

export default Button;
