import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import { resetModal } from 'state/actions/ui/modalActions';
import { currentLocation } from 'state/selectors';
import getRoutes, { RouteProperties } from 'utils/getRoutes';
import getLocationSlug from 'utils/getLocationSlug';
import LocationModel from 'constants/Models/LocationModel';

class BelowDeliveryMinimum extends Component {
  static propTypes = {
    handleAcceptClick: PropTypes.func,
    actions: PropTypes.shape({
      resetModal: PropTypes.func
    }),
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    currentLocation: LocationModel.propTypes
  };

  static defaultProps = {
    handleAcceptClick: f => f,
    actions: {
      resetModal: f => f
    },
    history: {
      push: f => f
    },
    currentLocation: LocationModel.defaultProps
  };

  handleAccept = () => {
    const { handleAcceptClick, actions, history, currentLocation } = this.props;

    return handleAcceptClick(() => {
      const basename = getRoutes(RouteProperties.BASENAME).MENUS;
      const locationSlug = getLocationSlug(currentLocation);

      actions.resetModal();

      return history.push(`${basename}/${locationSlug}`);
    });
  };

  render() {
    return RegistryLoader(
      {
        handleAccept: this.handleAccept
      },
      'components.BelowDeliveryMinimum',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: currentLocation(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetModal
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BelowDeliveryMinimum));
