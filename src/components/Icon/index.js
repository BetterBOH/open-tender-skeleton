import React, { Component } from 'react';
import PropTypes from 'prop-types';

import icons from 'components/Icon/svgs';

class Icon extends Component {
  render() {
    const { icon, fill } = this.props;
    const component = icons[icon];

    if (!component) return null;

    // TO-DO: Make an 'icon' registry to swap out SVGs on the fly during config
    return React.createElement(icons[icon], { fill });
  }
}

Icon.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string
};

Icon.defaultProps = {
  alt: '',
  children: null,
  className: 'w100',
  fill: '#8D92A3',
  icon: 'Right'
};

export { icons };
export default Icon;
