import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import CustomerModel from 'constants/Models/CustomerModel';
import withDrawer from 'lib/withDrawer';

class CheckoutAuthContact extends PureComponent {
  static propTypes = {
    customer: CustomerModel.propTypes
  };

  static defaultProps = {
    customer: CustomerModel.defaultProps
  };

  render() {
    const { customer, handleClickUserAttribute } = this.props;

    return RegistryLoader(
      {
        customer,
        handleClickUserAttribute
      },
      'components.CheckoutAuthContact',
      () => import('./presentation.js')
    );
  }
}

export default withDrawer(CheckoutAuthContact);
