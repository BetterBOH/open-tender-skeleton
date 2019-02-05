import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const AccountButton = props => {
  return RegistryLoader(props, 'components.AccountButton', () =>
    import('./presentation.js')
  );
};

AccountButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  customer: PropTypes.object
};

AccountButton.defaultProps = {
  className: '',
  icon: 'UserCircle',
  onClick: f => f,
  customer: {}
};

export default AccountButton;
