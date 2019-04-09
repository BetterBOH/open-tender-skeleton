import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createDropdown,
  closeDropdown
} from 'state/actions/ui/dropdownActions';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class Dropdown extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      createDropdown: PropTypes.func,
      closeDropdown: PropTypes.func
    }),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    actions: {
      createDropdown: f => f,
      closeDropdown: f => f
    },
    children: null
  };

  render() {
    const { children, actions, dropdownId, dropdowns } = this.props;

    return RegistryLoader(
      { children, actions, dropdownId, dropdowns },
      'components.Dropdown',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  dropdowns: get(state, 'dropdown.dropdowns')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createDropdown,
      closeDropdown
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
