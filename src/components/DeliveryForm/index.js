import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { Constants } from 'brandibble-redux';
import { Stages } from 'constants/Delivery';
import GeoJSONFeatureModel from 'constants/Models/GeoJSONFeatureModel';
import AddressModel from 'constants/Models/AddressModel';
import OrderRefModel from 'constants/Models/OrderRefModel';
import get from 'utils/get';
import isEqual from 'utils/isEqual';

class DeliveryForm extends PureComponent {
  static propTypes = {
    orderRef: OrderRefModel.propTypes,
    serviceType: PropTypes.string,
    selectedGeocoderFeature: GeoJSONFeatureModel.propTypes,
    geolocations: PropTypes.array,
    fetchGeolocationsStatus: PropTypes.string,
    setDeliveryFormAddressUnit: PropTypes.func,
    clearDeliveryFormAddress: PropTypes.func,
    address: AddressModel.PropTypes,
    confirm: PropTypes.func
  };

  static defaultProps = {
    orderRef: OrderRefModel.defaultProps,
    serviceType: Constants.ServiceTypes.DELIVERY,
    selectedGeocoderFeature: GeoJSONFeatureModel.defaultProps,
    geolocations: [],
    fetchGeolocationsStatus: '',
    setDeliveryFormAddressUnit: f => f,
    clearDeliveryFormAddress: f => f,
    address: AddressModel.defaultProps,
    confirm: f => f
  };

  state = {
    currentStage: Stages.ENTER_ADDRESS
  };

  componentDidUpdate(prevProps) {
    const newAddressIsNotEmpty = !!Object.keys(get(this, 'props.address'))
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

    return this.setState({ currentStage: Stages.ENTER_ADDRESS });
  };

  onSubmit = address => {
    const { onConfirm, orderRef } = this.props;

    return onConfirm(orderRef, address);
  };

  render() {
    const {
      serviceType,
      selectedGeocoderFeature,
      address,
      fetchGeolocationsStatus,
      setDeliveryFormAddressUnit
    } = this.props;
    const { currentStage } = this.state;

    return RegistryLoader(
      {
        serviceType,
        selectedGeocoderFeature,
        currentStage,
        changeAddress: this.changeAddress,
        geolocations: this.getQualifiedLocations(),
        address,
        fetchGeolocationsStatus,
        setDeliveryFormAddressUnit,
        onSubmit: this.onSubmit
      },
      'components.DeliveryForm',
      () => import('./presentation')
    );
  }
}

export default DeliveryForm;
