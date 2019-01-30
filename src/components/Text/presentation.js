import React from 'react';
import cx from 'classnames';

const Text = ({ size, elem, children, className }) => {
  const classes = cx('Text', `Text--size-${size}`, className);

  if (elem === 'h1') {
    return <h1 className={classes}>{children}</h1>;
  }

  return <span className={classes}>{children}</span>;
};

export default Text;
