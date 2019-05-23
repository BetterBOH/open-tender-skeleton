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
    onClick: PropTypes.func
  };

  static defaultProps = {
    className: '',
    address: null,
    onClick: f => f
  };

  render() {
    const { className, address, feature, onClick } = this.props;

    return RegistryLoader(
      { className, address, feature, onClick },
      'components.AddressCard',
      () => import('./presentation.js')
    );
  }
}

export default AddressCard;
