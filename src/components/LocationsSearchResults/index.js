import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import getLocationSlug from 'utils/getLocationSlug';
import getRoutes, { RouteProperties } from 'utils/getRoutes';
import { confirmChangeToPickup } from 'state/actions/serviceTypeActions';
import { FULFILLED, PENDING } from 'constants/Status';

class LocationsSearchResults extends PureComponent {
  state = {
    location: null
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.confirmChangeToPickupStatus === PENDING &&
      this.props.confirmChangeToPickupStatus === FULFILLED
    ) {
      const { history } = this.props;

      const basename = getRoutes(RouteProperties.BASENAME).MENUS;
      const locationSlug = getLocationSlug(this.state.location);

      return history.push(`${basename}/${locationSlug}`);
    }
  }

  onSelect = location => {
    this.setState({ location });
    this.props.actions.confirmChangeToPickup(location);
  };

  render() {
    const { geolocations, userCoordinates } = this.props;

    return RegistryLoader(
      {
        geolocations,
        userCoordinates,
        onSelect: this.onSelect
      },
      'components.LocationsSearchResults',
      () => import('./presentation')
    );
  }
}

const mapStateToProps = state => ({
  geolocations: get(state, 'openTender.data.geolocations'),
  userCoordinates: get(state, 'geocoder.userCoordinates'),
  confirmChangeToPickupStatus: get(state, 'status.confirmChangeToPickup')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      confirmChangeToPickup
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LocationsSearchResults));
