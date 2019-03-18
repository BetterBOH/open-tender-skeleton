import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setModal } from 'state/actions/ui/modalActions';
import ModalTypes from 'constants/ModalTypes';

import withLocales from 'lib/withLocales';

class MenuNav extends PureComponent {
  static propTypes = {
    menuCategories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string.isRequired
      })
    ),
    menuType: PropTypes.string
  };

  static defaultProps = {
    menuCategories: [],
    menuType: ''
  };

  state = {
    selectedCategory: null,
    menuNavIsClicked: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.menuNavIsClicked && this.state.menuNavIsClicked) {
      this.handleSetModal();
    }
  }

  handleClick = () => {
    this.setState({ menuNavIsClicked: true });
  };

  handleSetModal = () => {
    const { menuType, menuCategories, actions, localesContext } = this.props;
    const { Language } = localesContext;
    const setModal = get(actions, 'setModal', f => f);

    return setModal(ModalTypes.MENU_NAV_MODAL, {
      selectedCategory: this.state.selectedCategory,
      menuName: !!menuType
        ? `${menuType} ${Language.t('menu.menu')}`
        : Language.t('menu.menu'),
      menuCategories: menuCategories,
      handleSetActive: this.handleSetActive
    });
  };

  render() {
    const { menuType } = this.props;

    return RegistryLoader(
      {
        menuType,
        selectedCategory: this.state.selectedCategory,
        menuNavIsClicked: this.state.menuNavIsClicked,
        handleClick: this.handleClick,
        localesContext: this.props.localesContext
      },
      'components.MenuNav',
      () => import('./presentation.js')
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setModal
    },
    dispatch
  )
});

export default connect(
  null,
  mapDispatchToProps
)(withLocales(MenuNav));
