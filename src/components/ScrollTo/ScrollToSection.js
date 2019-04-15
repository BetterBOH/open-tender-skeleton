import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Element } from 'react-scroll';

class ScrollToSection extends PureComponent {
  static propTypes = {
    sectionName: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    sectionName: ''
  };

  render() {
    const { children, sectionName } = this.props;
    return <Element name={sectionName}>{children}</Element>;
  }
}

export default ScrollToSection;
