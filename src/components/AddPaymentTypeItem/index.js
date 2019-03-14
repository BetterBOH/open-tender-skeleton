import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
// import get from 'utils/get';

class AddPaymentTypeItem extends PureComponent {
  static propTypes = {
    paymentImage: PropTypes.string,
    descriptiveText: PropTypes.string,
    callToActionText: PropTypes.string,
    iconName: PropTypes.string
  };

  static defaultProps = {
    paymentImage: 'https://dsprindle.com/wp-content/uploads/emv-chip-card.jpg',
    descriptiveText: 'No Account Connected',
    callToActionText: 'Add a Credit Card',
    iconName: 'Details'
  };

  render() {
    const {
      paymentImage,
      descriptiveText,
      callToActionText,
      iconName
    } = this.props;

    return RegistryLoader(
      { paymentImage, descriptiveText, callToActionText, iconName },
      'components.AddPaymentTypeItem',
      () => import('./presentation.js')
    );
  }
}

export default AddPaymentTypeItem;
