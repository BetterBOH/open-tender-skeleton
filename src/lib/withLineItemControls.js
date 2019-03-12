import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addLineItem,
  removeLineItem,
  setLineItemQuantity
} from 'brandibble-redux';
import get from 'utils/get';
// TODO: Replace with authenticated customer allergen data
import { customer } from 'constants/Mocks';

const withLineItemControls = WrappedComponent => {
  class WithLineItemControls extends Component {
    static defaultProps = {
      quantity: 0
    };

    updateQuantity = (prevQuantity, quantity) => {
      switch (quantity) {
        case 0:
          return this.removeItem();
        case 1:
          return prevQuantity ? this.editItem(quantity) : this.addItem();
        default:
          return this.editItem(quantity);
      }
    };

    addItem = () => {
      const { item, actions, orderRef } = this.props;

      return actions.addLineItem(orderRef, item);
    };

    removeItem = () => {
      const { item, actions, orderRef } = this.props;

      return actions.removeLineItem(orderRef, item.lineItemInCart);
    };

    editItem = quantity => {
      const { item, actions, orderRef } = this.props;

      return actions.setLineItemQuantity(
        orderRef,
        item.lineItemInCart,
        quantity
      );
    };

    filterAllergenWarnings = (filters = []) => {
      const { item } = this.props;
      const itemAllergens = !!item.allergens ? item.allergens.split(', ') : [];

      return itemAllergens.filter(item => itemAllergens.includes(item));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          updateQuantity={this.updateQuantity}
          // TODO: Replace with authenticated customer allergen data
          allergenWarnings={this.filterAllergenWarnings(
            get(customer, 'allergens', [])
          )}
        />
      );
    }
  }

  const mapStateToProps = state => ({
    openTenderRef: get(state, 'openTender.ref'),
    orderRef: get(state, 'openTender.session.order.ref')
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
      {
        addLineItem,
        removeLineItem,
        setLineItemQuantity
      },
      dispatch
    )
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithLineItemControls);
};

export default withLineItemControls;
