import React from 'react';
import cx from 'classnames';

const Text = React.memo(
  ({ size, style, htmlFor, elem, children, className }) => {
    const classes = cx('Text', `Text--size-${size}`, className);

    if (elem === 'h1') {
      return (
        <h1 className={classes} style={style}>
          {children}
        </h1>
      );
    }

    if (elem === 'label') {
      return (
        <label className={classes} style={style} htmlFor={htmlFor}>
          {children}
        </label>
      );
    }

    return (
      <span className={classes} style={style}>
        {children}
      </span>
    );
  }
);

export default Text;
