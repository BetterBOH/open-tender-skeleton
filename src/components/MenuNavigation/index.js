import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import MenuModel from 'constants/Models/MenuModel';
import get from 'utils/get';
import isMobile from 'utils/isMobile';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDrawer } from 'state/actions/ui/drawerActions';

import { userIsAuthenticated } from 'state/selectors';

import DrawerTypes from 'constants/DrawerTypes';

class MenuNavigation extends PureComponent {
  static propTypes = {
    menu: MenuModel.propTypes
  };

  static defaultProps = {
    menu: MenuModel.defaultProps
  };

  state = {
    menuNavigationDrawerIsActive: false,
    menuNavigationDropdownIsActive: false,
    filterDrawerIsActive: false,
    filterDropdownIsActive: false,
    isMobile: false
  };

  componentWillMount() {
    this.checkDeviceWidth();
    window.addEventListener('resize', this.checkDeviceWidth);
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { actions } = this.props;
    const drawerIsInactive = !get(this, 'props.drawer.drawerIsActive');

    // Check if drawer has been deactivated and update state
    const menuNavigationDrawerWasActive =
      get(prevProps, 'drawer.drawerIsActive') &&
      get(prevProps, 'drawer.variant') === DrawerTypes.MENU_NAVIGATION;

    const filterDrawerWasActive =
      get(prevProps, 'drawer.drawerIsActive') &&
      get(prevProps, 'drawer.variant') === DrawerTypes.MENU_FILTER;

    if (menuNavigationDrawerWasActive && drawerIsInactive) {
      this.setState({ menuNavigationDrawerIsActive: false });
    }

    if (filterDrawerWasActive && drawerIsInactive) {
      this.setState({ filterDrawerIsActive: false });
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
    const currentlyIsMobile = isMobile();

    if (currentlyIsMobile !== wasMobile) {
      return this.setState({ isMobile: currentlyIsMobile });
    }
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

    return this.setState({ menuNavigationDropdownIsActive: true });
  };

  closeMenuNavigationDropdown = () =>
    this.setState({ menuNavigationDropdownIsActive: false });

  closeFiltersDropdown = () => this.setState({ filterDropdownIsActive: false });

  handleFiltersClick = () => {
    const { isMobile } = this.state;

    if (isMobile) {
      return this.setState({ filterDrawerIsActive: true });
    }

    return this.setState({ filterDropdownIsActive: true });
  };

  render() {
    const { menu, currentCategory, userIsAuthenticated } = this.props;
    const {
      menuNavigationDrawerIsActive,
      menuNavigationDropdownIsActive,
      filterDropdownIsActive
    } = this.state;

    return RegistryLoader(
      {
        menu,
        currentCategory,
        menuNavigationDrawerIsActive,
        menuNavigationDropdownIsActive,
        menuNavigationData: this.createDataForMenuNavigationLinks(),
        filterDropdownIsActive,
        userIsAuthenticated,
        handleMenusClick: this.handleMenusClick,
        closeMenuNavigationDropdown: this.closeMenuNavigationDropdown,
        handleFiltersClick: this.handleFiltersClick,
        closeFiltersDropdown: this.closeFiltersDropdown
      },
      'components.MenuNavigation',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  drawer: get(state, 'drawer'),
  currentCategory: get(state, 'menuNavigation.currentCategory'),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setDrawer
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuNavigation);
