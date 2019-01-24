import React from 'react';
import cx from 'classnames';

const Button = ({ onClick, variant, className, children, to }) => {
  const classes = cx('Button', `Button--${variant}`, className);

  if (to) {
    if (linkIsExternal(to)) {
      <a href={to} target="_blank" rel="noopener">
        <div className={classes}>{children}</div>
      </a>;
    } else {
      <Link to={to}>
        <div className={classes}>{children}</div>
      </Link>;
    }
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
