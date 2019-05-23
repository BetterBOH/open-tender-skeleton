import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import CustomerModel from 'constants/Models/CustomerModel';
import withDrawer from 'lib/withDrawer';

class CheckoutAuthContact extends PureComponent {
  static propTypes = {
    customer: CustomerModel.propTypes,
    unauthenticateUser: PropTypes.func,
    openTenderRef: PropTypes.object
  };

  static defaultProps = {
    customer: CustomerModel.defaultProps,
    unauthenticateUser: f => f,
    openTenderRef: null
  };

  render() {
    const {
      customer,
      unauthenticateUser,
      openTenderRef,
      handleClickUserAttribute
    } = this.props;

    return RegistryLoader(
      {
        customer,
        unauthenticateUser,
        openTenderRef,
        handleClickUserAttribute
      },
      'components.CheckoutAuthContact',
      () => import('./presentation.js')
    );
  }
}

export default withDrawer(CheckoutAuthContact);
