import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';
import getInvalidItemsInCart from 'utils/getInvalidItemsInCart';
import get from 'utils/get';
import { INVALID_ITEM_POINTER } from 'constants/OpenTender';

class InvalidItemsInCart extends Component {
  static propTypes = {
    errors: PropTypes.array,
    proceed: PropTypes.func
  };

  static defaultProps = {
    errors: [],
    proceed: f => f
  };

  handleAccept = () => {
    const {
      actions: { resetModal },
      proceed
    } = this.props;

    return proceed().then(() => resetModal());
  };

  handleCancel = () => {
    const {
      actions: { resetModal },
      history: { push }
    } = this.props;

    resetModal();
    return push('/locations');
  };

  render() {
    const { cart, errors, localesContext } = this.props;

    const invalidItems = errors.filter(
      error => get(error, 'source.pointer') === INVALID_ITEM_POINTER
    );

    const invalidItemsInCart = getInvalidItemsInCart(invalidItems, cart);

    return RegistryLoader(
      {
        invalidItemsInCart,
        localesContext,
        handleCancel: this.handleCancel,
        handleAccept: this.handleAccept
      },
      'components.InvalidItemsInCart',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  cart: get(state, 'openTender.session.order.ref.cart')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ resetModal }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InvalidItemsInCart));
