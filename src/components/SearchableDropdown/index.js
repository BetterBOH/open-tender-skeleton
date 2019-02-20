import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class SearchableDropdown extends Component {
  onClear = () => {
    this.props.onChange('');
  };

  render() {
    const { options, value, onChange, onSelect } = this.props;
    return RegistryLoader(
      { value, options, onChange, onSelect, onClear: this.onClear },
      'components.SearchableDrodpown',
      () => import('./presentation.js')
    );
  }
}

SearchableDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func
};

SearchableDropdown.defaultProps = {
  options: [],
  value: null,
  onChange: f => f,
  onSelect: f => f
};

export default SearchableDropdown;
