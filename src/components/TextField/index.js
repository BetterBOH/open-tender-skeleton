import { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class TextField extends Component {
  static propTypes = {
    type: PropTypes.string,
    autoComplete: PropTypes.string,
    value: PropTypes.string,
    variant: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    iconLeft: PropTypes.string,
    isDisabled: PropTypes.bool
  };

  static defaultProps = {
    type: 'text',
    autoComplete: '',
    value: '',
    variant: 'primary',
    onChange: f => f,
    onBlur: f => f,
    placeholder: '',
    label: '',
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
      autoComplete,
      variant,
      className,
      placeholder,
      label,
      iconLeft,
      isDisabled,
      onBlur
    } = this.props;
    return RegistryLoader(
      {
        value,
        type,
        autoComplete,
        variant,
        className,
        placeholder,
        label,
        iconLeft,
        isDisabled,
        onBlur,
        onChange: this.onChange
      },
      'components.TextField',
      () => import('./presentation')
    );
  }
}

export default TextField;
