import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Status, updateUser } from 'brandibble-redux';

import { accountDetails } from 'state/selectors';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';
import { resetDrawer } from 'state/actions/ui/drawerActions';
import { ESCAPE_KEYS } from 'constants/Accessibility';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';

class Drawer extends PureComponent {
  static propTypes = {
    drawerIsActive: PropTypes.bool,
    variant: PropTypes.string,
    data: PropTypes.object,
    actions: PropTypes.shape({
      resetDrawer: PropTypes.func,
      updateUser: PropTypes.func
    }),
    openTenderRef: OpenTenderRefModel.propTypes,
    accountDetails: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      password: PropTypes.string
    }),
    updateUserStatus: PropTypes.string
  };

  static defaultProps = {
    drawerIsActive: false,
    variant: '',
    data: {},
    actions: {
      resetDrawer: f => f,
      updateUser: f => f
    },
    accountDetails: null,
    updateUserStatus: Status.IDLE
  };

  componentDidMount() {
    window.addEventListener('resize', this.deactivateDrawer);
    window.addEventListener('keydown', this.handleKeyDown);
  }

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

  componentWillUnmount() {
    window.removeEventListener('resize', this.deactivateDrawer);
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  deactivateDrawer = () => {
    const { drawerIsActive, actions } = this.props;

    if (drawerIsActive) return actions.resetDrawer();
  };

  handleKeyDown = e => {
    if (!ESCAPE_KEYS.includes(e.keyCode)) return null;

    return this.deactivateDrawer();
  };

  render() {
    const {
      drawerIsActive,
      variant,
      data,
      actions,
      openTenderRef,
      accountDetails,
      updateUserStatus
    } = this.props;

    return RegistryLoader(
      {
        drawerIsActive,
        variant,
        data,
        actions,
        openTenderRef,
        accountDetails,
        updateUserStatus
      },
      'components.Drawer',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  drawerIsActive: get(state, 'drawer.drawerIsActive', false),
  variant: get(state, 'drawer.variant'),
  data: get(state, 'drawer.data'),
  openTenderRef: get(state, 'openTender.ref'),
  accountDetails: accountDetails(state),
  updateUserStatus: get(state, 'openTender.status.updateUser')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetDrawer,
      updateUser
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
