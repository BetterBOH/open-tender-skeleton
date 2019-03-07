import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Card = React.memo(({ variant, className, children }) => {
  const classes = cx(
    'Card flex flex-col flex-wrap overflow-hidden radius-md',
    `Card--${variant}`,
    className,
    { 'bg-color-white-overlay shadow-md': !variant }
  );

  return <div className={classes}>{children}</div>;
});

export default Card;
