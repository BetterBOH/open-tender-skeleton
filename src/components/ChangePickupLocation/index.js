import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { currentLocation } from 'state/selectors';
import getRoutes, { RouteProperties } from 'utils/getRoutes';
import getLocationSlug from 'utils/getLocationSlug';

class ChangePickupLocation extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func
  };

  static defaultProps = {
    onClose: f => f
  };

  goToLocations = () => {
    const { onClose, history } = this.props;
    const locationsPath = getRoutes().LOCATIONS;

    onClose();
    return history.push(locationsPath);
  };

  goToCurrentMenu = () => {
    const { onClose, history, currentLocation } = this.props;
    const basename = getRoutes(RouteProperties.BASENAME).MENUS;
    const locationSlug = getLocationSlug(currentLocation);

    onClose();
    return history.push(`${basename}/${locationSlug}`);
  };

  render() {
    return RegistryLoader(
      {
        goToLocations: this.goToLocations,
        goToCurrentMenu: this.goToCurrentMenu
      },
      'components.ChangePickupLocation',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: currentLocation(state)
});

export default connect(mapStateToProps)(withRouter(ChangePickupLocation));
