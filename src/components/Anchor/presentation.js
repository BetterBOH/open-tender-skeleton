import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import linkIsExternal from 'utils/linkIsExternal';

const Anchor = React.memo(props => {
  const { url, children, className, style } = props;

  if (!url) return null;

  if (linkIsExternal(url))
    return (
      <a
        style={style}
        className={cx('Anchor', className)}
        href={url}
        target="_blank"
        rel="noopener"
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
