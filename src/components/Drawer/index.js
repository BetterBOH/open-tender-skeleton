import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';
import { resetDrawer } from 'state/actions/ui/drawerActions';

class Drawer extends PureComponent {
  static propTypes = {
    drawerIsActive: PropTypes.bool,
    variant: PropTypes.string,
    data: PropTypes.object,
    actions: PropTypes.shape({
      resetDrawer: PropTypes.func
    })
  };

  static defaultProps = {
    drawerIsActive: false,
    variant: '',
    data: {},
    actions: {
      resetDrawer: f => f
    }
  };

  componentWillMount() {
    window.addEventListener('resize', this.deactivateDrawer);
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
  }

  deactivateDrawer = () => {
    const { drawerIsActive, actions } = this.props;
    if (drawerIsActive) actions.resetDrawer();
  };

  render() {
    const { drawerIsActive, variant, data, actions } = this.props;

    return RegistryLoader(
      { drawerIsActive, variant, data, actions },
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
