import RegistryLoader from 'lib/RegistryLoader';

import LocationModel from 'constants/Models/LocationModel';
import withLocales from 'lib/withLocales';

const LocationInfoCard = props => {
  return RegistryLoader(props, 'components.LocationInfoCard', () =>
    import('./presentation.js')
  );
};

LocationInfoCard.propTypes = {
  location: LocationModel.propTypes
};

LocationInfoCard.defaultProps = {
  location: LocationModel.defaultProps
};

export default withLocales(LocationInfoCard);
