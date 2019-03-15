import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setModal } from 'state/actions/ui/modalActions';
import { MENU_NAV_MODAL } from 'constants/ModalVariants';

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

  handleClick = () => {
    this.setState({ menuNavIsClicked: true });
    this.handleSetModal();
  };

  handleSetModal = () => {
    const { menuType, menuCategories, actions, localesContext } = this.props;
    const { Language } = localesContext;
    const setModal = get(actions, 'setModal', f => f);

    return setModal(MENU_NAV_MODAL, {
      menuName: !!menuType
        ? `${menuType} ${Language.t('menu.menu')}`
        : Language.t('menu.menu'),
      menuCategories: menuCategories
    });
  };

  handleSetActive = category => {
    this.setState({
      selectedCategory: category
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

const mapStateToProps = state => state;

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
)(withLocales(MenuNav));
