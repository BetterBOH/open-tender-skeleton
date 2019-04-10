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
    const { menuTitle, menuCategories, actions } = this.props;
    const setModal = get(actions, 'setModal', f => f);

    return setModal(ModalTypes.MENU_NAVIGATION, {
      selectedCategory: this.state.selectedCategory,
      menuTitle: menuTitle,
      menuCategories: menuCategories
    });
  };

  render() {
    const { menuTitle } = this.props;

    return RegistryLoader(
      {
        menuTitle,
        selectedCategory: this.state.selectedCategory,
        menuNavIsClicked: this.state.menuNavIsClicked,
        handleClick: this.handleClick
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
)(MenuNav);
