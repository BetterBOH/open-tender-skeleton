import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';
import withLocales from 'lib/withLocales';

const PastOrderDetails = props => {
  return RegistryLoader(props, 'components.PastOrderDetails', () =>
    import('./presentation.js')
  );
};

PastOrderDetails.propTypes = {
  order: OrderModel.propTypes
};

PastOrderDetails.defaultProps = {
  order: OrderModel.defaultProps
};

export default withLocales(PastOrderDetails);
