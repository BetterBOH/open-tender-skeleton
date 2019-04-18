import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  resetModal,
  addAllergen,
  removeAllergen
} from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class FilterModal extends PureComponent {
  handleAllergenClick = console.log;

  render() {
    const { onClose, allergens } = this.props;

    return RegistryLoader(
      {
        onClose,
        allergens,
        handleAllergenClick: this.handleAllergenClick
      },
      'components.FilterModal',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  allergens: get(state, 'openTender.data.allergens.allergensById')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { resetModal, addAllergen, removeAllergen },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterModal);
