import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LineItemModel from 'constants/Models/LineItemModel';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  removeLineItem,
  setLineItemQuantity,
  addLineItem,
  addOptionToLineItem,
  removeOptionFromLineItem
} from 'brandibble-redux';
import { swapOrAddOptionToLineItem } from 'state/actions/orderActions';

const withLineItemActions = WrappedComponent => {
  class ComponentWithLineItemActions extends Component {
    static propTypes = {
      openTenderRef: PropTypes.object,
      orderRef: PropTypes.object,
      customer: PropTypes.object,
      quantity: PropTypes.number,
      item: LineItemModel.propTypes,
      optionItem: LineItemModel.propTypes,
      _actions: PropTypes.shape({
        addLineItem: PropTypes.func,
        removeLineItem: PropTypes.func,
        setLineItemQuantity: PropTypes.func,
        addOptionToLineItem: PropTypes.func,
        removeOptionFromLineItem: PropTypes.func,
        swapOrAddOptionToLineItem: PropTypes.func
      }),
      updateQuantity: PropTypes.func,
      addOptionToLineItem: PropTypes.func,
      removeOptionFromLineItem: PropTypes.func,
      allergenWarnings: PropTypes.arrayOf(PropTypes.string),
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      openTenderRef: null,
      orderRef: null,
      customer: null,
      quantity: 0,
      item: LineItemModel.defaultProps,
      optionItem: LineItemModel.defaultProps,
      _actions: {
        addLineItem: f => f,
        removeLineItem: f => f,
        setLineItemQuantity: f => f,
        addOptionToLineItem: f => f,
        removeOptionFromLineItem: f => f,
        swapOrAddOptionToLineItem: f => f
      },
      updateQuantity: f => f,
      addOptionToLineItem: f => f,
      removeOptionFromLineItem: f => f,
      allergenWarnings: [],
      ...WrappedComponent.defaultProps
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
      const lineItem = item.lineItemInCart ? item.lineItemInCart : item;

      return _actions.removeLineItem(orderRef, lineItem);
    };

    editItem = quantity => {
      const { item, _actions, orderRef } = this.props;
      const lineItem = item.lineItemInCart ? item.lineItemInCart : item;
      return _actions.setLineItemQuantity(orderRef, lineItem, quantity);
    };

    addOptionToLineItem = (lineItem, optionGroup) => {
      const { optionItem, _actions, orderRef } = this.props;
      const optionGroupData = get(optionGroup, 'optionGroupData');
      const min = get(optionGroupData, 'min_options');
      const max = get(optionGroupData, 'max_options');

      const optionItemData = get(optionItem, 'optionItemData');

      if (min === 1 && max === 1) {
        return _actions.swapOrAddOptionToLineItem(
          orderRef,
          lineItem,
          optionGroupData,
          optionItemData
        );
      }

      return _actions.addOptionToLineItem(
        orderRef,
        lineItem,
        optionGroupData,
        optionItemData
      );
    };

    removeOptionFromLineItem = lineItem => {
      const { optionItem, _actions, orderRef } = this.props;

      const optionItemData = get(optionItem, 'optionItemData');

      return _actions.removeOptionFromLineItem(
        orderRef,
        lineItem,
        optionItemData
      );
    };

    filterAllergenWarnings = (customerAllergens = []) => {
      // TO-DO: Make this check regardless type: lineItem, menuItem, optionItem
      const { item } = this.props;

      if (!item) return [];
      const itemAllergens = !!item.allergens ? item.allergens.split(', ') : [];

      return customerAllergens.filter(allergen =>
        itemAllergens.includes(allergen)
      );
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          updateQuantity={this.updateQuantity}
          addOptionToLineItem={this.addOptionToLineItem}
          removeOptionFromLineItem={this.removeOptionFromLineItem}
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
        swapOrAddOptionToLineItem
      },
      dispatch
    )
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComponentWithLineItemActions);
};

export default withLineItemActions;
