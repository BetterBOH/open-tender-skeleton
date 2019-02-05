import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const LocationCard = props => {
  return RegistryLoader(props, 'components.LocationCard', () =>
    import('./presentation.js')
  );
};

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  hours: PropTypes.shape({
    monday: PropTypes.string.isRequired,
    tuesday: PropTypes.string.isRequired,
    wednesday: PropTypes.string.isRequired,
    thursday: PropTypes.string.isRequired,
    friday: PropTypes.string.isRequired,
    saturday: PropTypes.string.isRequired,
    sunday: PropTypes.string.isRequired
  })
};

LocationCard.defaultProps = {
  name: null,
  distance: null,
  image: null,
  address: null,
  phone: null,
  hours: {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null
  }
};

export default LocationCard;
