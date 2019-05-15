import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { PICKUP } from 'constants/OpenTender';
import GeoJSONFeatureModel from 'constants/Models/GeoJSONFeatureModel';
import { Status } from 'brandibble-redux';
import get from 'utils/get';
import isEqual from 'utils/isEqual';

class DeliveryForm extends PureComponent {
  static propTypes = {
    serviceType: PropTypes.string,
    selectedGeocoderFeature: GeoJSONFeatureModel.propTypes,
    geolocations: PropTypes.array,
    fetchGeolocationsStatus: PropTypes.string,
    setDeliveryFormAddressUnit: PropTypes.func,
    clearDeliveryFormAddress: PropTypes.func,
    address: PropTypes.object
  };

  static defaultProps = {
    serviceType: PICKUP,
    selectedGeocoderFeature: GeoJSONFeatureModel.defaultProps,
    geolocations: [],
    fetchGeolocationsStatus: '',
    setDeliveryFormAddressUnit: f => f,
    clearDeliveryFormAddress: f => f,
    address: {}
  };

  state = {
    // currentStage: Stages.SELECT_EXISTING_PAYMENT_METHOD,
    currentStage: 'enterAddress'
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.fetchGeolocationsStatus === Status.PENDING &&
      this.props.fetchGeolocationsStatus === Status.FULFILLED
    ) {
      const geolocations = get(this, 'props.geolocations', []).filter(
        location => location.in_delivery_zone
      );
      const closestOpenLocation = geolocations[0];
      // this.setState({currentStage: 'confirmAddress'})
    }

    if (!isEqual(get(prevProps, 'address'), get(this, 'props.address'))) {
      this.setState({ currentStage: 'confirmAddress' });
    }
  }

  getQualifiedLocations = () => {
    return get(this, 'props.geolocations', []).filter(
      location => location.in_delivery_zone
    );
  };

  changeAddress = () => {
    this.setState({ currentStage: 'enterAddress' });
  };

  render() {
    const {
      serviceType,
      selectedGeocoderFeature,
      address,
      fetchGeolocationsStatus,
      setDeliveryFormAddressUnit
    } = this.props;
    const { currentStage, unit } = this.state;

    return RegistryLoader(
      {
        serviceType,
        selectedGeocoderFeature,
        currentStage,
        changeAddress: this.changeAddress,
        geolocations: this.getQualifiedLocations(),
        address,
        fetchGeolocationsStatus,
        setDeliveryFormAddressUnit
      },
      'components.DeliveryForm',
      () => import('./presentation')
    );
  }
}

export default DeliveryForm;
