import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { Constants } from 'brandibble-redux';
import { Stages } from 'constants/Delivery';
import GeoJSONFeatureModel from 'constants/Models/GeoJSONFeatureModel';
import DeliveryAddress from 'constants/Models/DeliveryAddress';
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
    address: DeliveryAddress.PropTypes,
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
    address: DeliveryAddress.defaultProps,
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

  submit = address => {
    const confirm = get(this, 'props.confirm');

    return confirm(get(this, 'props.orderRef'), address);
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
        submit: this.submit
      },
      'components.DeliveryForm',
      () => import('./presentation')
    );
  }
}

export default DeliveryForm;
