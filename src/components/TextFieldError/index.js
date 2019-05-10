import { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class TextFieldError extends Component {
  static propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    errors: []
  };

  render() {
    const { errors } = this.props;

    return RegistryLoader({ errors }, 'components.TextFieldError', () =>
      import('./presentation')
    );
  }
}

export default TextFieldError;
