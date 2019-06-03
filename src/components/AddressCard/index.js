import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import AddressModel from 'constants/Models/AddressModel';
import GeoJSONFeatureModel from 'constants/Models/GeoJSONFeatureModel';

class AddressCard extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    address: AddressModel.propTypes,
    feature: GeoJSONFeatureModel.propTypes,
    onClick: PropTypes.func,
    buttonLabel: PropTypes.string
  };

  static defaultProps = {
    className: '',
    address: AddressModel.defaultProps,
    feature: GeoJSONFeatureModel.defaultProps,
    onClick: f => f,
    buttonLabel: ''
  };

  render() {
    const { className, address, feature, onClick, buttonLabel } = this.props;

    return RegistryLoader(
      { className, address, feature, onClick, buttonLabel },
      'components.AddressCard',
      () => import('./presentation.js')
    );
  }
}

export default AddressCard;
