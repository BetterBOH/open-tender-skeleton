import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class AuthEmailCheck extends Component {
  state = {
    email: ''
  };

  propTypes = {
    actions: PropTypes.shape({
      validateUser: PropTypes.func
    }),
    openTenderRef: PropTypes.object
  };

  defaultProps = {
    actions: {
      validateUser: f => f
    },
    openTenderRef: null
  };

  handleCheckEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleCheckEmailClick = () => {
    const { actions, openTenderRef } = this.props;

    actions.validateUser(openTenderRef, this.state.email);
  };

  render() {
    return RegistryLoader(
      {
        ...this.props,
        handleCheckEmailChange: this.handleCheckEmailChange,
        handleCheckEmailClick: this.handleCheckEmailClick
      },
      'components.AuthEmailCheck',
      () => import('./presentation')
    );
  }
}

export default AuthEmailCheck;
