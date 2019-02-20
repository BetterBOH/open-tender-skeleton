import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class Dropdown extends Component {
  state = {
    value: null
  };

  render() {
    const { options, value } = this.props;

    return RegistryLoader({ value, options }, 'components.Dropdown', () =>
      import('./presentation.js')
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func
};

Dropdown.defaultProps = {
  options: [],
  value: null,
  onChange: f => f
};

export default Dropdown;
