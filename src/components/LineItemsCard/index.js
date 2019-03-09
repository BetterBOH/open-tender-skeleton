import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import LineItemModel from 'constants/Models/LineItemModel';
import CustomerModel from 'constants/Models/CustomerModel';

import withLocales from 'lib/withLocales';

const LineItemsCard = props => {
  return RegistryLoader(props, 'components.LineItemsCard', () =>
    import('./presentation.js')
  );
};

LineItemsCard.propTypes = {
  items: PropTypes.arrayOf(LineItemModel.propTypes),
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
  isConfigurable: PropTypes.bool,
  showItemsWithoutQuantity: PropTypes.bool,
  customer: CustomerModel.propTypes
};

LineItemsCard.defaultProps = {
  items: [],
  handleDecrement: f => f,
  handleIncrement: f => f,
  isConfigurable: true,
  showItemsWithoutQuantity: true,
  customer: CustomerModel.propTypes
};

export { LineItemsCard };
export default withLocales(LineItemsCard);
