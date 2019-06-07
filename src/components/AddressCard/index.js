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
    buttonLabel: PropTypes.string,
    elemRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
  };

  static defaultProps = {
    className: '',
    address: AddressModel.defaultProps,
    feature: GeoJSONFeatureModel.defaultProps,
    onClick: f => f,
    buttonLabel: '',
    elemRef: null
  };

  render() {
    const {
      className,
      address,
      feature,
      onClick,
      buttonLabel,
      elemRef
    } = this.props;

    return RegistryLoader(
      { className, address, feature, onClick, buttonLabel, elemRef },
      'components.AddressCard',
      () => import('./presentation.js')
    );
  }
}

export default AddressCard;
