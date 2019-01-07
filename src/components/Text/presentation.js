import React from 'react';

export default props => {
  if (!props.elem) return <span>{props.children}</span>;
  if (props.elem === 'h1') return <h1>{props.children}</h1>;
};
