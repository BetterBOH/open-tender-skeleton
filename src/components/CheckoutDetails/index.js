import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import CheckoutDetailsModel from 'constants/Models/CheckoutDetailsModel';
import withLocales from 'lib/withLocales';

const CheckoutDetails = React.memo(props =>
  RegistryLoader(props, 'components.CheckoutDetails', () =>
    import('./presentation.js')
  )
);

CheckoutDetails.propTypes = {
  checkoutDetails: CheckoutDetailsModel.propTypes
};

CheckoutDetails.defaultProps = {
  checkoutDetails: CheckoutDetailsModel.defaultProps
};

export { CheckoutDetails };
export default withLocales(CheckoutDetails);
