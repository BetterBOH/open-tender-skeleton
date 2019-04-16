import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

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
    const uniqueAriaId = uuid();

    return RegistryLoader(
      { icon, fill, className, alt, uniqueAriaId },
      'components.Icon',
      () => import('./presentation')
    );
  }
}

export default Icon;
