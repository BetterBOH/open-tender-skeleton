import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';
import getInvalidItemsInCart from 'utils/getInvalidItemsInCart';
import get from 'utils/get';
import { INVALID_ITEMS_POINTER } from 'constants/OpenTender';

class InvalidItemsInCart extends Component {
  static propTypes = {
    showCancelButton: PropTypes.bool,
    errors: PropTypes.array,
    handleAcceptClick: PropTypes.func
  };

  static defaultProps = {
    showCancelButton: true,
    errors: [],
    handleAcceptClick: f => f
  };

  handleAccept = () => {
    const {
      actions: { resetModal },
      handleAcceptClick
    } = this.props;

    return handleAcceptClick().then(() => resetModal());
  };

  handleCancel = () => {
    this.props.actions.resetModal();
    return this.props.history.push('/locations');
  };

  render() {
    const { cart, errors, showCancelButton, localesContext } = this.props;
    console.log('3', showCancelButton);
    const invalidItems = errors.slice(1);
    const invalidItemsInCart = getInvalidItemsInCart(invalidItems, cart);

    return RegistryLoader(
      {
        invalidItemsInCart,
        localesContext,
        showCancelButton,
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
