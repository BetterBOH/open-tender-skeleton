import React from 'react';

export default ({ elem, children }) => {
  if (!elem) return <span className="Text">{children}</span>;
  if (elem === 'h1') return <h1 className="Text">{children}</h1>;
};
