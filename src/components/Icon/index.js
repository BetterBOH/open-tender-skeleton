import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string,
    fill: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    variant: PropTypes.string
  };

  static defaultProps = {
    icon: 'Right',
    fill: '#cbd2d9',
    className: 'w100',
    alt: '',
    variant: ''
  };

  render() {
    const { icon, fill, className, alt, variant } = this.props;
    const uniqueAriaId = uuid();

    return RegistryLoader(
      { icon, fill, className, alt, variant, uniqueAriaId },
      'components.Icon',
      () => import('./presentation')
    );
  }
}

export default Icon;
