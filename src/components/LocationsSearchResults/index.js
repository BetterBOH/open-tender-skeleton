import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import getLocationSlug from 'utils/getLocationSlug';
import getRoutes, { RouteProperties } from 'utils/getRoutes';

class LocationsSearchResults extends PureComponent {
  onSelect = location => {
    const { history } = this.props;

    const basename = getRoutes(RouteProperties.BASENAME).MENUS;
    const locationSlug = getLocationSlug(location);

    return history.push(`${basename}/${locationSlug}`);
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
  userCoordinates: get(state, 'geocoder.userCoordinates')
});

export default connect(mapStateToProps)(withRouter(LocationsSearchResults));
