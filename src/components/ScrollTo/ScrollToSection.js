import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Element } from 'react-scroll';

class ScrollToSection extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sectionName: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    sectionName: '',
    className: ''
  };

  render() {
    const { children, sectionName, className } = this.props;

    return (
      <Element name={sectionName} className={className}>
        {children}
      </Element>
    );
  }
}

export default ScrollToSection;
