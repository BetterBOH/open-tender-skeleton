import { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class TextField extends Component {
  onChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    const { value, type, variant, className, placeholder } = this.props;
    return RegistryLoader(
      { value, type, variant, className, placeholder, onChange: this.onChange },
      'components.TextField',
      () => import('./presentation')
    );
  }
}

TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

TextField.defaultProps = {
  type: 'text',
  value: '',
  onChange: f => f,
  placeholder: ''
};

export default TextField;
