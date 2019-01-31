import React from 'react';
import cx from 'classnames';

const Text = ({ size, style, elem, children, className }) => {
  const classes = cx('Text', `Text--size-${size}`, className);

  if (elem === 'h1') {
    return (
      <h1 className={classes} style={style}>
        {children}
      </h1>
    );
  }

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  );
};

export default Text;
