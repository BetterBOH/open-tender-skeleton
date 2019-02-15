import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import withLocales from 'lib/withLocales';

const LineItemRow = props => {
  return RegistryLoader(props, 'components.LineItemRow', () =>
    import('./presentation.js')
  );
};

LineItemRow.propTypes = {
  // TODO: replace with lineItemModel
  lineItem: PropTypes.shape({
    name: PropTypes.string,
    total_price: PropTypes.number,
    quantity: PropTypes.number
  }),
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func
};

LineItemRow.defaultProps = {
  lineItem: null,
  handleDecrement: f => f,
  handleIncrement: f => f
};

export default withLocales(LineItemRow);
