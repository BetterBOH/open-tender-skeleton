import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';

class FilterModal extends PureComponent {
  handleAllergenClick = allergen => {
    console.log(allergen);
  };

  render() {
    const { onClose } = this.props;

    return RegistryLoader(
      {
        onClose,
        handleAllergenClick: this.handleAllergenClick
      },
      'components.FilterModal',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ resetModal }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterModal);
