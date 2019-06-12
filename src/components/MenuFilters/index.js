import { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAllergens, removeAllergens } from 'brandibble-redux';
import {
  addAllergensToLocalStorage,
  removeAllergensFromLocalStorage
} from 'state/actions/allergensActions';
import { userIsAuthenticated, currentUserAllergens } from 'state/selectors';
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
    const {
      actions,
      openTenderRef,
      userAllergens,
      userIsAuthenticated
    } = this.props;

    if (userAllergens.includes(allergen)) {
      return userIsAuthenticated
        ? actions.removeAllergens(openTenderRef, [allergen])
        : actions.removeAllergensFromLocalStorage([allergen]);
    }

    return userIsAuthenticated
      ? actions.addAllergens(openTenderRef, [allergen])
      : actions.addAllergensToLocalStorage([allergen]);
  };

  render() {
    const { onClose, allergens, userAllergens, drawerIsActive } = this.props;

    return RegistryLoader(
      {
        onClose,
        allergens,
        userAllergens,
        drawerIsActive,
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
  userAllergens: currentUserAllergens(state),
  drawerIsActive: get(state, 'drawer.drawerIsActive'),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addAllergens,
      removeAllergens,
      addAllergensToLocalStorage,
      removeAllergensFromLocalStorage
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuFilters);
