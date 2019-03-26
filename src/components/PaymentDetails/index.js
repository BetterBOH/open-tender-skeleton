import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class PaymentDetails extends PureComponent {
  static propTypes = {
    paymentTypes: PropTypes.array
  };

  static defaultProps = {
    paymentTypes: []
  };

  render() {
    const { paymentType, orderRef, setPaymentMethod, cancel } = this.props;

    return RegistryLoader(
      { paymentType, orderRef, setPaymentMethod, cancel },
      'components.PaymentDetails',
      () => import('./presentation')
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentDetails);
