import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
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

  handleOnChange = (field, value) => {
    const Language = get(this, 'props.localesContext.Language');
    this.setState({ errors: null });

    if (!value) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [field]: Language.t(`dashboard.account.errors.${field}`)
        }
      }));
    }
  };

  render() {
    const { errors } = this.props;
    const { firstName, lastName } = this.state;

    return RegistryLoader(
      {
        customerAttributes: { firstName, lastName },
        errors,
        handleOnChange: this.handleOnChange
      },
      'components.AccountDetailsEditName',
      () => import('./presentation.js')
    );
  }
}

export default AccountDetailsEditName;
