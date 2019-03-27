import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';
import { resetDrawer } from 'state/actions/ui/drawerActions';
import paymentTypes from 'state/selectors/paymentTypes';

class Drawer extends PureComponent {
  componentDidUpdate(prevProps) {
    const drawerWasActive = get(prevProps, 'drawerIsActive');
    const drawerIsActive = get(this, 'props.drawerIsActive');

    if (!drawerWasActive && drawerIsActive) {
      freezeScroll();
    }

    if (drawerWasActive && !drawerIsActive) {
      unfreezeScroll();
    }
  }

  render() {
    const { drawerIsActive, variant, data } = this.props;
    const { resetDrawer } = this.props.actions;

    return RegistryLoader(
      { drawerIsActive, variant, data, resetDrawer },
      'components.Drawer',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  drawerIsActive: get(state, 'drawer.drawerIsActive', false),
  variant: get(state, 'drawer.variant'),
  data: get(state, 'drawer.data')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetDrawer
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
