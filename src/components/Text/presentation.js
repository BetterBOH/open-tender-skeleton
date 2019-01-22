import React from 'react';
import PropTypes from 'prop-types';

const Text = props => {
  if (props.elem === 'h1') return <h1>{props.children}</h1>;
  return <span>{props.children}</span>;
};

Text.propTypes = {
  elem: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Text.defaultProps = {
  elem: 'span',
  children: null
};

export default Text;
