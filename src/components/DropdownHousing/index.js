import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createDropdownHousing,
  closeDropdownHousing
} from 'state/actions/ui/dropdownHousingActions';

import RegistryLoader from 'lib/RegistryLoader';

class DropdownHousing extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      createDropdownHousing: PropTypes.func,
      closeDropdownHousing: PropTypes.func
    }),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    actions: {
      createDropdownHousing: f => f,
      closeDropdownHousing: f => f
    },
    children: null
  };

  render() {
    const { children, actions } = this.props;

    return RegistryLoader(
      { children, actions },
      'components.DropdownHousing',
      () => import('./presentation.js')
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createDropdownHousing,
      closeDropdownHousing
    },
    dispatch
  )
});

export default connect(
  null,
  mapDispatchToProps
)(DropdownHousing);
