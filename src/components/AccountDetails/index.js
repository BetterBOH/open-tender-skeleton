import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import CustomerModel from 'constants/Models/CustomerModel';
import AddressModel from 'constants/Models/AddressModel';
import PaymentModel from 'constants/Models/PaymentModel';
import withLocales from 'lib/withLocales';

const AccountDetails = React.memo(props =>
  RegistryLoader(props, 'components.AccountDetails', () =>
    import('./presentation.js')
  )
);

AccountDetails.propTypes = {
  customer: CustomerModel.propTypes,
  addresses: PropTypes.arrayOf(AddressModel.propTypes),
  payments: PropTypes.arrayOf(PaymentModel.propTypes)
};

AccountDetails.defaultProps = {
  customer: CustomerModel.defaultProps,
  addresses: [],
  payments: []
};

export default withLocales(AccountDetails);
