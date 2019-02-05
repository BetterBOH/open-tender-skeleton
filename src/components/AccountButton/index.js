import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import CustomerModel from 'constants/Models/CustomerModel';
import withLocales from 'lib/withLocales';

const AccountButton = props => {
  return RegistryLoader(props, 'components.AccountButton', () =>
    import('./presentation.js')
  );
};

AccountButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  customer: CustomerModel.propTypes
};

AccountButton.defaultProps = {
  className: '',
  icon: 'UserCircle',
  onClick: f => f,
  customer: CustomerModel.defaultProps
};

export default withLocales(AccountButton);
