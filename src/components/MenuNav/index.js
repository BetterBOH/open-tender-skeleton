import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setModal } from 'state/actions/ui/modalActions';
import ModalTypes from 'constants/ModalTypes';

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
    menuNavigationIsActive: false
  };

  componentDidUpdate = (prevProps, prevState) => {
    const menuNavModalWasActive =
      get(prevProps, 'modal.modalIsActive') &&
      get(prevProps, 'modal.variant') === ModalTypes.MENU_NAVIGATION;
    const modalIsInactive = !get(this, 'props.modal.modalIsActive');

    if (menuNavModalWasActive && modalIsInactive) {
      this.setState({ menuNavigationIsActive: false });
    }

    if (
      !prevState.menuNavigationIsActive &&
      this.state.menuNavigationIsActive
    ) {
      this.handleSetModal();
    }
  };

  handleSetModal = () => {
    const { menuTitle, menuCategories, actions } = this.props;
    const setModal = get(actions, 'setModal', f => f);

    return setModal(ModalTypes.MENU_NAVIGATION, {
      selectedCategory: this.state.selectedCategory,
      menuTitle: menuTitle,
      menuCategories: menuCategories
    });
  };

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
  modal: get(state, 'modal')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setModal
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuNav);
