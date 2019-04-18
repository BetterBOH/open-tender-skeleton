import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAllergens, removeAllergens } from 'brandibble-redux';
import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class FilterModal extends PureComponent {
  handleAllergenClick = allergen => {
    const { actions, openTenderRef, userAllergens } = this.props;

    console.log(actions);

    if (userAllergens.includes(allergen)) {
      return actions.removeAllergens(openTenderRef, [allergen]);
    }

    return actions.addAllergens(openTenderRef, [allergen]);
  };

  render() {
    const { onClose, allergens, userAllergens } = this.props;

    return RegistryLoader(
      {
        onClose,
        allergens,
        userAllergens,
        handleAllergenClick: this.handleAllergenClick
      },
      'components.FilterModal',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  allergens: get(state, 'openTender.data.allergens.allergensById'),
  userAllergens: get(state, 'openTender.user.attributes.allergens')
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
)(FilterModal);
