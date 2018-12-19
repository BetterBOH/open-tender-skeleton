import React from 'react';

const TextWrapper = ({ elem, children }) => {
  if (!elem) return <span>{children}</span>;
  if (elem === 'h1') return <h1>{children}</h1>;
};

export default TextWrapper;
