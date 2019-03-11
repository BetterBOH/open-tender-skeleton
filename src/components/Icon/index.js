import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import icons from 'components/Icon/svgs';

class Icon extends Component {
  static propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    fill: PropTypes.string,
    icon: PropTypes.string
  };

  static defaultProps = {
    alt: '',
    className: 'w100',
    fill: '#8D92A3',
    icon: 'Right'
  };

  render() {
    const { icon, fill, className, alt } = this.props;
    const component = icons[icon];

    if (!component) return null;

    // TO-DO: Make an 'icon' registry to swap out SVGs on the fly during config
    return (
      <div className={cx('Icon', className)} alt={alt ? alt : icon}>
        {React.createElement(icons[icon], { fill })}
      </div>
    );
  }
}

export { icons };
export default Icon;
