import React from 'react';
import cx from 'classnames';

import linkIsExternal from 'utils/linkIsExternal';

const Button = ({ onClick, variant, className, children, text, to }) => {
  const classes = cx('Button', `Button--${variant}`, className);

  if (to) {
    if (linkIsExternal(to)) {
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
    <button className={classes} onClick={onClick}>
      {text ? text : children}
    </button>
  );
};

export default Button;
