import RegistryLoader from 'lib/RegistryLoader';

import LocationModel from 'constants/Models/LocationModel';
import withLocales from 'lib/withLocales';

const LocationCard = props => {
  return RegistryLoader(props, 'components.LocationCard', () =>
    import('./presentation.js')
  );
};

LocationCard.propTypes = {
  location: LocationModel.propTypes
};

LocationCard.defaultProps = {
  location: LocationModel.defaultProps
};

export default withLocales(LocationCard);
