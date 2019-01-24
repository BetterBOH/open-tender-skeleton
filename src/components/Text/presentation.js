import React from 'react';

const Text = props => {
  if (props.elem === 'h1') return <h1>{props.children}</h1>;
  return <span>{props.children}</span>;
};

export default Text;
