import { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { currentLineItem } from 'state/selectors';
import RegistryLoader from 'lib/RegistryLoader';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';
import withLocales from 'lib/withLocales';

class LineItemEditor extends Component {
  static propTypes = {
    item: PropTypes.shape({
      lineItem: LineItemModel.propTypes
    }),
    onClose: PropTypes.func
  };

  static defaultProps = {
    item: null,
    onClose: f => f
  };

  render() {
    const { item, onClose, localesContext } = this.props;

    return RegistryLoader(
      { item, onClose, localesContext },
      'components.LineItemEditor',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  item: currentLineItem(state)
});

export default connect(mapStateToProps)(
  withLocales(withLineItemActions(LineItemEditor))
);
