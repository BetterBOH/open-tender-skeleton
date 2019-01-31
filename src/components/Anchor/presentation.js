import React from 'react';
import { Link } from 'react-router-dom';
import linkIsExternal from 'utils/linkIsExternal';

const Anchor = React.memo(props => {
  const { url, children } = props;

  if (!url) return null;

  if (linkIsExternal(url))
    return (
      <a href={url} target="_blank" rel="noopener" {...props}>
        {children}
      </a>
    );

  return <Link to={url} {...props} />;
});

export default Anchor;
