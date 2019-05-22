import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';

class LocationIsClosed extends Component {
  static propTypes = {
    handleAcceptClick: PropTypes.func
  };

  static defaultProps = {
    handleAcceptClick: f => f
  };

  handleAccept = () => {
    const {
      actions: { resetModal },
      handleAcceptClick
    } = this.props;

    return handleAcceptClick();
  };

  render() {
    const { localesContext } = this.props;

    return RegistryLoader(
      {
        localesContext,
        handleAccept: this.handleAccept
      },
      'components.LocationIsClosed',
      () => import('./presentation.js')
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ resetModal }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(LocationIsClosed);
