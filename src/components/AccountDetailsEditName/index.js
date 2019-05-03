import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

class AccountDetailsEditName extends PureComponent {
  static propTypes = {
    customerAttributes: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    errors: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    customerAttributes: null,
    errors: null
  };

  static InputTypes = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName'
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      firstName: get(props, 'customerAttributes.firstName'),
      lastName: get(props, 'customerAttributes.lastName')
    };
  }

  handleChange = (field, value) =>
    this.setState(prevState => ({
      ...prevState,
      [field]: value,
      errors: null
    }));

  handleSubmit = () => {
    const Language = get(this, 'props.localesContext.Language');
    const { firstName, lastName } = this.state;

    console.log(this.state);

    if (!firstName) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [AccountDetailsEditName.InputTypes.FIRST_NAME]: Language.t(
            'dashboard.account.errors.firstName'
          )
        }
      }));
    }

    if (!lastName) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [AccountDetailsEditName.InputTypes.LAST_NAME]: Language.t(
            'dashboard.account.errors.lastName'
          )
        }
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    console.log(this.state, customerId, openTenderRef);

    return this.props.updateUser(openTenderRef, customerId, {
      first_name: firstName,
      last_name: lastName
    });
  };

  render() {
    const { errors } = this.props;
    const { firstName, lastName } = this.state;

    return RegistryLoader(
      {
        customerAttributes: { firstName, lastName },
        errors,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      },
      'components.AccountDetailsEditName',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(AccountDetailsEditName);
