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
    selectedCategory: null,
    menuNavigationLinksAreShown: false,
    isMobile: false
  };

  componentWillMount() {
    this.checkDeviceWidth();
    window.addEventListener('resize', this.checkDeviceWidth);
  }

  componentDidUpdate = (prevProps, prevState) => {
    const menuNavigationModalWasActive =
      get(prevProps, 'modal.modalIsActive') &&
      get(prevProps, 'modal.variant') === ModalTypes.MENU_NAVIGATION;
    const modalIsInactive = !get(this, 'props.modal.modalIsActive');

    const menuNavigationDrawerWasActive =
      get(prevProps, 'drawer.drawerIsActive') &&
      get(prevProps, 'drawer.variant') === DrawerTypes.MENU_NAVIGATION;
    const drawerIsInactive = !get(this, 'props.drawer.drawerIsActive');

    if (
      (menuNavigationModalWasActive && modalIsInactive) ||
      (menuNavigationDrawerWasActive && drawerIsInactive)
    ) {
      this.setState({ menuNavigationLinksAreShown: false });
    }

    if (
      !prevState.menuNavigationLinksAreShown &&
      this.state.menuNavigationLinksAreShown
    ) {
      const setDrawer = get(this, 'props.actions.setDrawer');
      const setModal = get(this, 'props.actions.setModal');
      const data = this.createMenuNavigationigationLinksData();

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

  createMenuNavigationigationLinksData = () => {
    const { menu } = this.props;

    return {
      selectedCategory: this.state.selectedCategory,
      daypart: get(menu, 'daypart.daypart'),
      menuCategories: get(menu, 'menu')
    };
  };

  handleClick = () => {
    this.setState({ menuNavigationLinksAreShown: true });
  };

  render() {
    const { menu } = this.props;
    const { menuNavigationLinksAreShown, selectedCategory } = this.state;

    return RegistryLoader(
      {
        menu,
        menuNavigationLinksAreShown,
        selectedCategory,
        handleClick: this.handleClick
      },
      'components.MenuNavigation',
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
)(MenuNavigation);
