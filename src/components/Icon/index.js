import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string,
    fill: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string
  };

  static defaultProps = {
    icon: 'Right',
    fill: '#8D92A3',
    className: 'w100',
    alt: ''
  };

  render() {
    const { icon, fill, className, alt } = this.props;
    const uniqueAriaId = uuid();

    return RegistryLoader(
      { icon, fill, className, alt, uniqueAriaId },
      'components.Icon',
      () => import('./presentation')
    );
  }
}

export default Icon;
