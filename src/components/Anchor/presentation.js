import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const Anchor = React.memo(props => {
  const { url, children, className, style, linkIsExternal } = props;

  if (linkIsExternal)
    return (
      <a
        style={style}
        className={cx('Anchor inline-block', className)}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );

  return (
    <Link style={style} className={cx('Anchor', className)} to={url}>
      {children}
    </Link>
  );
});

export default Anchor;
