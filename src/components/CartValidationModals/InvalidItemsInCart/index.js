import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';
import getInvalidItemsInCart from 'utils/getInvalidItemsInCart';
import get from 'utils/get';
import LineItemModel from 'constants/Models/LineItemModel';

class InvalidItemsInCart extends Component {
  static propTypes = {
    showCancelButton: PropTypes.bool,
    errors: PropTypes.array,
    handleAcceptClick: PropTypes.func,
    actions: PropTypes.shape({
      resetModal: PropTypes.func
    }),
    cart: PropTypes.shape({
      lineItems: PropTypes.arrayOf(LineItemModel.propTypes)
    })
  };

  static defaultProps = {
    showCancelButton: true,
    errors: [],
    handleAcceptClick: f => f,
    actions: {
      resetModal: f => f
    },
    cart: {
      lineItems: []
    }
  };

  handleAccept = () => {
    const {
      actions: { resetModal },
      handleAcceptClick
    } = this.props;

    return handleAcceptClick().then(resetModal);
  };

  handleCancel = () => {
    this.props.actions.resetModal();
    return this.props.history.push('/locations');
  };

  render() {
    const { cart, error, showCancelButton } = this.props;
    const invalidItemIds = get(error, 'source.pointers');
    const invalidItemsInCart = getInvalidItemsInCart(invalidItemIds, cart);

    return RegistryLoader(
      {
        invalidItemsInCart,
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
