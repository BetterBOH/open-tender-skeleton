import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import getLocationSlug from 'utils/getLocationSlug';

class LocationsSearchResults extends PureComponent {
  onSelect = location => {
    console.log(location);
    const slug = getLocationSlug(location);

    this.props.history.push(`/menus/${slug}`);
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
