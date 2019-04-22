import { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAllergens, removeAllergens } from 'brandibble-redux';
import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class MenuFilters extends PureComponent {
  constructor() {
    super(...arguments);

    this.filterRef = createRef();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (!this.filterRef || !this.filterRef.current) return null;
    if (!this.filterRef.current.contains(e.target)) {
      return this.props.onClose();
    }
  };

  handleAllergenClick = allergen => {
    const { actions, openTenderRef, userAllergens } = this.props;

    if (userAllergens.includes(allergen)) {
      return actions.removeAllergens(openTenderRef, [allergen]);
    }

    return actions.addAllergens(openTenderRef, [allergen]);
  };

  render() {
    const {
      onClose,
      allergens,
      userAllergens,
      drawerIsActive,
      modalIsActive
    } = this.props;

    return RegistryLoader(
      {
        onClose,
        allergens,
        userAllergens,
        drawerIsActive,
        modalIsActive,
        handleAllergenClick: this.handleAllergenClick,
        filterRef: this.filterRef
      },
      'components.MenuFilters',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  allergens: get(state, 'openTender.data.allergens.allergensById'),
  userAllergens: get(state, 'openTender.user.attributes.allergens'),
  drawerIsActive: get(state, 'drawer.drawerIsActive'),
  modalIsActive: get(state, 'modal.modalIsActive')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { resetModal, addAllergens, removeAllergens },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuFilters);
