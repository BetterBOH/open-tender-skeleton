import { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class TextArea extends Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    rows: PropTypes.number,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    focusOnMount: PropTypes.bool
  };

  static defaultProps = {
    name: null,
    className: null,
    rows: 15,
    onChange: f => f,
    value: '',
    placeholder: null,
    focusOnMount: false
  };

  onChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    const {
      name,
      className,
      rows,
      value,
      placeholder,
      focusOnMount
    } = this.props;

    return RegistryLoader(
      {
        name,
        className,
        rows,
        onChange: this.onChange,
        value,
        placeholder,
        focusOnMount
      },
      'components.TextArea',
      () => import('./presentation')
    );
  }
}

export default TextArea;
