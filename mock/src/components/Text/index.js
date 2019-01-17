import React from 'react';

export default props => {
  if (!props.elem) return <span className="Text">{props.children}</span>;
  if (props.elem === 'h1') return <h1 className="Text">{props.children}</h1>;
};
