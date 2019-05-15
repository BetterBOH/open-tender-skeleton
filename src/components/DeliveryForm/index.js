import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { DELIVERY } from 'constants/OpenTender';
import { Stages } from 'constants/Delivery';
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
    serviceType: DELIVERY,
    selectedGeocoderFeature: GeoJSONFeatureModel.defaultProps,
    geolocations: [],
    fetchGeolocationsStatus: '',
    setDeliveryFormAddressUnit: f => f,
    clearDeliveryFormAddress: f => f,
    address: {}
  };

  state = {
    currentStage: Stages.ENTER_ADDRESS
  };

  componentDidUpdate(prevProps) {
    const newAddressIsNotEmpty = !!Object.keys(get(this, 'props.address', {}))
      .length;
    if (
      !isEqual(get(prevProps, 'address'), get(this, 'props.address')) &&
      newAddressIsNotEmpty
    ) {
      this.setState({ currentStage: Stages.CONFIRM_ADDRESS });
    }
  }

  getQualifiedLocations = () => {
    return get(this, 'props.geolocations', []).filter(
      location => location.in_delivery_zone
    );
  };

  changeAddress = () => {
    this.props.clearDeliveryFormAddress();
    this.setState({ currentStage: Stages.ENTER_ADDRESS });
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
