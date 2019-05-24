import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import { currentLocation } from 'state/selectors';
import getRoutes, { RouteProperties } from 'utils/getRoutes';
import getLocationSlug from 'utils/getLocationSlug';

class BelowDeliveryMinimum extends Component {
  static propTypes = {
    handleAcceptClick: PropTypes.func
  };

  static defaultProps = {
    handleAcceptClick: f => f
  };

  handleAccept = () => {
    const { handleAcceptClick, history, currentLocation } = this.props;

    return handleAcceptClick(() => {
      const basename = getRoutes(RouteProperties.BASENAME).MENUS;
      const locationSlug = getLocationSlug(currentLocation);

      return history.push(`${basename}/${locationSlug}`);
    });
  };

  render() {
    const { localesContext } = this.props;

    return RegistryLoader(
      {
        localesContext,
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

export default connect(mapStateToProps)(withRouter(BelowDeliveryMinimum));
