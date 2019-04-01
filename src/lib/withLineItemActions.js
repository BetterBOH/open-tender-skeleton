import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  removeLineItem,
  setLineItemQuantity,
  addLineItem,
  addOptionToLineItem,
  removeOptionFromLineItem
} from 'brandibble-redux';
import { toggleAddOptionToLineItem } from 'state/actions/orderActions';
import get from 'utils/get';

const withLineItemActions = WrappedComponent => {
  class WithLineItemActions extends Component {
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
      const { item, _actions, orderRef } = this.props;

      return _actions.addLineItem(orderRef, item);
    };

    removeItem = () => {
      const { item, _actions, orderRef } = this.props;

      return _actions.removeLineItem(orderRef, item.lineItemInCart);
    };

    editItem = quantity => {
      const { item, _actions, orderRef } = this.props;

      return _actions.setLineItemQuantity(
        orderRef,
        item.lineItemInCart,
        quantity
      );
    };

    addOptionToLineItem = (lineItem, optionGroup) => {
      const { item, _actions, orderRef } = this.props;

      if (optionGroup.min_options === 1 && optionGroup.max_options === 1) {
        return _actions.toggleAddOptionToLineItem(
          orderRef,
          lineItem,
          optionGroup,
          item
        );
      }

      return _actions.addOptionToLineItem(
        orderRef,
        lineItem,
        optionGroup,
        item
      );
    };

    removeOptionFromLineItem = lineItem => {
      const { item, _actions, orderRef } = this.props;

      return _actions.removeOptionFromLineItem(orderRef, lineItem, item);
    };

    filterAllergenWarnings = (customerAllergens = []) => {
      const { item } = this.props;
      const itemAllergens = !!item.allergens ? item.allergens.split(', ') : [];

      return customerAllergens.filter(allergen =>
        itemAllergens.includes(allergen)
      );
    };

    render() {
      const { actions } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          actions={actions}
          updateQuantity={this.updateQuantity}
          addOptionToLineItem={this.addOptionToLineItem}
          removeOptionFromLineItem={this.removeOptionFromLineItem}
          // TODO: Replace with authenticated customer allergen data
          allergenWarnings={this.filterAllergenWarnings(
            get(this.props.customer, 'allergens', [])
          )}
        />
      );
    }
  }

  const mapStateToProps = state => ({
    openTenderRef: get(state, 'openTender.ref'),
    orderRef: get(state, 'openTender.session.order.ref'),
    customer: get(state, 'openTender.user.attributes')
  });

  const mapDispatchToProps = dispatch => ({
    _actions: bindActionCreators(
      {
        addLineItem,
        removeLineItem,
        setLineItemQuantity,
        addOptionToLineItem,
        removeOptionFromLineItem,
        toggleAddOptionToLineItem
      },
      dispatch
    )
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithLineItemActions);
};

export default withLineItemActions;
