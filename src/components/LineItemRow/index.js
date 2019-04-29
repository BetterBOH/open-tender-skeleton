import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';

const LineItemRow = props => {
  return RegistryLoader(props, 'components.LineItemRow', () =>
    import('./presentation.js')
  );
};

LineItemRow.propTypes = {
  item: LineItemModel.propTypes,
  isConfigurable: PropTypes.bool,
  fallbackImageSrc: PropTypes.string
};

LineItemRow.defaultProps = {
  item: LineItemModel.defaultProps,
  isConfigurable: true,
  fallbackImageSrc: ''
};

export default withLineItemActions(LineItemRow);
