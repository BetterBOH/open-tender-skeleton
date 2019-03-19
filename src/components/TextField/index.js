import { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class TextField extends Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    variant: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    iconLeft: PropTypes.string,
    isDisabled: PropTypes.bool
  };

  static defaultProps = {
    type: 'text',
    value: '',
    variant: '',
    onChange: f => f,
    placeholder: '',
    iconLeft: '',
    isDisabled: false
  };

  onChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    const {
      value,
      type,
      variant,
      className,
      placeholder,
      iconLeft,
      isDisabled
    } = this.props;
    return RegistryLoader(
      {
        value,
        type,
        variant,
        className,
        placeholder,
        iconLeft,
        isDisabled,
        onChange: this.onChange
      },
      'components.TextField',
      () => import('./presentation')
    );
  }
}

export default TextField;
