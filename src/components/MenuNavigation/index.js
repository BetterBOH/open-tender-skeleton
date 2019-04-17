import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import MenuModel from 'constants/Models/MenuModel';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setModal } from 'state/actions/ui/modalActions';
import { setDrawer } from 'state/actions/ui/drawerActions';

import ModalTypes from 'constants/ModalTypes';
import DrawerTypes from 'constants/DrawerTypes';
import Breakpoints from 'constants/Breakpoints';

class MenuNavigation extends PureComponent {
  static propTypes = {
    menu: MenuModel.propTypes
  };

  static defaultProps = {
    menu: MenuModel.defaultProps
  };

  state = {
    menuNavigationModalIsActive: false,
    menuNavigationDrawerIsActive: false,
    isMobile: false
  };

  componentWillMount() {
    this.checkDeviceWidth();
    window.addEventListener('resize', this.checkDeviceWidth);
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { actions } = this.props;

    const modalIsInactive = !get(this, 'props.modal.modalIsActive');
    const drawerIsInactive = !get(this, 'props.drawer.drawerIsActive');

    // Check if modal has been deactivated and update state
    const menuNavigationModalWasActive =
      get(prevProps, 'modal.modalIsActive') &&
      get(prevProps, 'modal.variant') === ModalTypes.MENU_NAVIGATION;

    const filterModalWasActive =
      get(prevProps, 'modal.modalIsActive') &&
      get(prevProps, 'modal.variant') === ModalTypes.MENU_FILTER;

    const menuNavigationDrawerWasActive =
      get(prevProps, 'drawer.drawerIsActive') &&
      get(prevProps, 'drawer.variant') === DrawerTypes.MENU_NAVIGATION;

    const filterDrawerWasActive =
      get(prevProps, 'drawer.drawerIsActive') &&
      get(prevProps, 'drawer.variant') === DrawerTypes.MENU_FILTER;

    if (menuNavigationModalWasActive && modalIsInactive) {
      this.setState({ menuNavigationModalIsActive: false });
    }

    if (filterModalWasActive && modalIsInactive) {
      this.setState({ filterModalIsActive: false });
    }

    if (menuNavigationDrawerWasActive && drawerIsInactive) {
      this.setState({ menuNavigationDrawerIsActive: false });
    }

    if (filterDrawerWasActive && drawerIsInactive) {
      this.setState({ filterDrawerIsActive: false });
    }

    if (
      !prevState.menuNavigationModalIsActive &&
      this.state.menuNavigationModalIsActive &&
      !this.state.isMobile
    ) {
      const data = this.createDataForMenuNavigationLinks();

      return actions.setModal(ModalTypes.MENU_NAVIGATION, data);
    }

    if (
      !prevState.filterModalIsActive &&
      this.state.filterModalIsActive &&
      !this.state.isMobile
    ) {
      return actions.setModal(ModalTypes.MENU_FILTER);
    }

    // Set drawer on mobile
    if (
      !prevState.menuNavigationDrawerIsActive &&
      this.state.menuNavigationDrawerIsActive &&
      this.state.isMobile
    ) {
      const data = this.createDataForMenuNavigationLinks();

      return actions.setDrawer(DrawerTypes.MENU_NAVIGATION, data);
    }

    if (
      !prevState.filterDrawerIsActive &&
      this.state.filterDrawerIsActive &&
      this.state.isMobile
    ) {
      return actions.setDrawer(DrawerTypes.MENU_FILTER);
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkDeviceWidth);
  }

  checkDeviceWidth = () => {
    const wasMobile = this.state.isMobile;
    const isMobile = window.innerWidth < Breakpoints.md;

    if (isMobile !== wasMobile) return this.setState({ isMobile });
  };

  createDataForMenuNavigationLinks = () => {
    const { menu, currentCategory } = this.props;

    return {
      currentCategory: currentCategory,
      daypart: get(menu, 'daypart.daypart'),
      menuCategories: get(menu, 'menu')
    };
  };

  handleMenusClick = () => {
    const { isMobile } = this.state;

    if (isMobile) {
      return this.setState({ menuNavigationDrawerIsActive: true });
    }

    return this.setState({ menuNavigationModalIsActive: true });
  };

  handleFiltersClick = () => {
    const { isMobile } = this.state;

    if (isMobile) {
      return this.setState({ filterDrawerIsActive: true });
    }

    return this.setState({ filterModalIsActive: true });
  };

  render() {
    const { menu, currentCategory } = this.props;
    const {
      menuNavigationDrawerIsActive,
      menuNavigationModalIsActive
    } = this.state;

    return RegistryLoader(
      {
        menu,
        menuNavigationDrawerIsActive,
        menuNavigationModalIsActive,
        currentCategory,
        handleMenusClick: this.handleMenusClick,
        handleFiltersClick: this.handleFiltersClick
      },
      'components.MenuNavigation',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  modal: get(state, 'modal'),
  drawer: get(state, 'drawer'),
  currentCategory: get(state, 'menuNavigation.currentCategory')
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
)(MenuNavigation);
