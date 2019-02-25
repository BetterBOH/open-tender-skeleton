import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import LineItemModel from 'constants/Models/LineItemModel';

import withLocales from 'lib/withLocales';

const LineItemRow = props => {
  return RegistryLoader(props, 'components.LineItemRow', () =>
    import('./presentation.js')
  );
};

LineItemRow.propTypes = {
  lineItem: LineItemModel.propTypes,
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
  isConfigurable: PropTypes.bool
};

LineItemRow.defaultProps = {
  lineItem: LineItemModel.defaultProps,
  handleDecrement: f => f,
  handleIncrement: f => f,
  isConfigurable: true
};

export { LineItemRow };
export default withLocales(LineItemRow);
