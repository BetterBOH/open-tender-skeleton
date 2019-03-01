import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import AccountDetailsModel from 'constants/Models/AccountDetailsModel';
import withLocales from 'lib/withLocales';

const AccountDetailsItem = React.memo(props =>
  RegistryLoader(props, 'components.AccountDetailsItem', () =>
    import('./presentation.js')
  )
);

AccountDetailsItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string
};

AccountDetailsItem.defaultProps = {
  label: '',
  icon: '',
  value: ''
};

export { AccountDetailsItem };
export default withLocales(AccountDetailsItem);
