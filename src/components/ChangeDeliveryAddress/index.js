import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { currentLocation } from 'state/selectors';
import getRoutes, { RouteProperties } from 'utils/getRoutes';
import getLocationSlug from 'utils/getLocationSlug';
import LocationModel from 'constants/Models/LocationModel';

class ChangeDeliveryAddress extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func,
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    currentLocation: LocationModel.propTypes
  };

  static defaultProps = {
    onClose: f => f,
    history: {
      push: f => f
    },
    currentLocation: LocationModel.defaultProps
  };

  goToDelivery = () => {
    const { onClose, history } = this.props;
    const deliveryPath = getRoutes().DELIVERY;

    onClose();
    return history.push(deliveryPath);
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
        goToDelivery: this.goToDelivery,
        goToCurrentMenu: this.goToCurrentMenu
      },
      'components.ChangeDeliveryAddress',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: currentLocation(state)
});

export default connect(mapStateToProps)(withRouter(ChangeDeliveryAddress));
