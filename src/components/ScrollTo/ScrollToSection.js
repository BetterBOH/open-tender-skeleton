import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Element } from 'react-scroll';

class ScrollToSection extends PureComponent {
  render() {
    const { children, sectionName } = this.props;
    return <Element name={sectionName}>{children}</Element>;
  }
}

ScrollToSection.defaultProps = {
  sectionName: ''
};

ScrollToSection.propTypes = {
  sectionName: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ScrollToSection;
