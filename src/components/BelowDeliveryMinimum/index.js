import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';

class BelowDeliveryMinimum extends Component {
  static propTypes = {
    handleAcceptClick: PropTypes.func
  };

  static defaultProps = {
    handleAcceptClick: f => f
  };

  render() {
    const { localesContext, handleAcceptClick } = this.props;

    return RegistryLoader(
      {
        localesContext,
        handleAccept: handleAcceptClick
      },
      'components.BelowDeliveryMinimum',
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
)(BelowDeliveryMinimum);
