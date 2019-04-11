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
    selectedCategory: null
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
    const { menuTitle, modalIsActive, modalVariant } = this.props;
    const menuNavModalIsActive =
      modalIsActive && modalVariant === ModalTypes.MENU_NAVIGATION;

    return RegistryLoader(
      {
        menuTitle,
        menuNavModalIsActive,
        selectedCategory: this.state.selectedCategory,
        handleClick: this.handleSetModal
      },
      'components.MenuNav',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  modalIsActive: get(state, 'modal.modalIsActive'),
  modalVariant: get(state, 'modal.variant')
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
