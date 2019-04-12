import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setModal } from 'state/actions/ui/modalActions';
import { setDrawer } from 'state/actions/ui/drawerActions';
import ModalTypes from 'constants/ModalTypes';
import DrawerTypes from 'constants/DrawerTypes';
import Breakpoints from 'constants/Breakpoints';

class MenuNav extends PureComponent {
  static propTypes = {
    menuCategories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string.isRequired
      })
    ),
    menuTitle: PropTypes.string
  };

  static defaultProps = {
    menuCategories: [],
    menuTitle: 'Menu'
  };

  state = {
    selectedCategory: null,
    menuNavigationIsActive: false,
    isMobile: false
  };

  componentWillMount() {
    this.checkDeviceWidth();
    window.addEventListener('resize', this.checkDeviceWidth);
  }

  componentDidUpdate = (prevProps, prevState) => {
    const menuNavModalWasActive =
      get(prevProps, 'modal.modalIsActive') &&
      get(prevProps, 'modal.variant') === ModalTypes.MENU_NAVIGATION;
    const modalIsInactive = !get(this, 'props.modal.modalIsActive');

    const menuNavDrawerWasActive =
      get(prevProps, 'drawer.drawerIsActive') &&
      get(prevProps, 'drawer.variant') === DrawerTypes.MENU_NAVIGATION;
    const drawerIsInactive = !get(this, 'props.drawer.drawerIsActive');

    if (
      (menuNavModalWasActive && modalIsInactive) ||
      (menuNavDrawerWasActive && drawerIsInactive)
    ) {
      this.setState({ menuNavigationIsActive: false });
    }

    if (
      !prevState.menuNavigationIsActive &&
      this.state.menuNavigationIsActive
    ) {
      const setDrawer = get(this, 'props.actions.setDrawer');
      const setModal = get(this, 'props.actions.setModal');
      const data = this.createMenuNavigationData();

      if (this.state.isMobile) {
        return setDrawer(DrawerTypes.MENU_NAVIGATION, data);
      }
      return setModal(ModalTypes.MENU_NAVIGATION, data);
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkDeviceWidth);
  }

  checkDeviceWidth = () => {
    const { isMobile } = this.state;

    if (isMobile) {
      if (window.innerWidth > Breakpoints.md) {
        this.setState({ isMobile: false });
      }
    }

    if (!isMobile) {
      if (window.innerWidth < Breakpoints.md) {
        this.setState({ isMobile: true });
      }
    }
  };

  createMenuNavigationData = () => ({
    selectedCategory: this.state.selectedCategory,
    menuTitle: this.props.menuTitle,
    menuCategories: this.props.menuCategories
  });

  handleClick = () => {
    this.setState({ menuNavigationIsActive: true });
  };

  render() {
    const { menuTitle } = this.props;

    return RegistryLoader(
      {
        menuTitle,
        menuNavigationIsActive: this.state.menuNavigationIsActive,
        selectedCategory: this.state.selectedCategory,
        handleClick: this.handleClick
      },
      'components.MenuNav',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  modal: get(state, 'modal'),
  drawer: get(state, 'drawer')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setModal,
      setDrawer
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuNav);
