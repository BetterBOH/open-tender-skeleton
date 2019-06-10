import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
import { currentUserAllergens, favoritesAsArray } from 'state/selectors';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import OrderRefModel from 'constants/Models/OrderRefModel';
import CustomerModel from 'constants/Models/CustomerModel';
import LineItemModel from 'constants/Models/LineItemModel';
import MenuItemModel from 'constants/Models/MenuItemModel';
import FavoriteModel from 'constants/Models/FavoriteModel';
import get from 'utils/get';

const withLineItemActions = WrappedComponent => {
  class ComponentWithLineItemActions extends Component {
    static propTypes = {
      openTenderRef: OpenTenderRefModel.propTypes,
      orderRef: OrderRefModel.propTypes,
      customer: CustomerModel.propTypes,
      quantity: PropTypes.number,
      item: MenuItemModel.propTypes,
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
      customerFavorites: PropTypes.arrayOf(FavoriteModel.propTypes),
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      openTenderRef: null,
      orderRef: null,
      customer: CustomerModel.defaultProps,
      quantity: 0,
      item: MenuItemModel.defaultProps,
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
      customerFavorites: [],
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
      const lineItems = get(orderRef, 'cart.lineItems', []);
      const lineItem = get(item, 'uuid')
        ? item
        : lineItems.find(
            lineItem => get(lineItem, 'product.id') === get(item, 'id')
          );

      return _actions.removeLineItem(orderRef, lineItem);
    };

    editItem = quantity => {
      const { item, _actions, orderRef } = this.props;
      const lineItems = get(orderRef, 'cart.lineItems', []);
      const lineItem = get(item, 'uuid')
        ? item
        : lineItems.find(
            lineItem => get(lineItem, 'product.id') === get(item, 'id')
          );

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

    filterAllergenWarnings = () => {
      const { item, userAllergens } = this.props;

      if (!item) return [];
      const itemAllergens = !!item.allergens ? item.allergens.split(', ') : [];

      return userAllergens.filter(allergen => itemAllergens.includes(allergen));
    };

    favoriteId = () => {
      const { customerFavorites, item } = this.props;
      const lineItemInCustomerFavorites = customerFavorites.find(
        favorite => favorite.menu_item_id === item.id
      );

      if (!lineItemInCustomerFavorites) return null;

      return get(lineItemInCustomerFavorites, 'favorite_item_id');
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          updateQuantity={this.updateQuantity}
          addOptionToLineItem={this.addOptionToLineItem}
          removeOptionFromLineItem={this.removeOptionFromLineItem}
          allergenWarnings={this.filterAllergenWarnings()}
          favoriteId={this.favoriteId()}
        />
      );
    }
  }

  const mapStateToProps = state => ({
    openTenderRef: get(state, 'openTender.ref'),
    orderRef: get(state, 'openTender.session.order.ref'),
    customer: get(state, 'openTender.user.attributes'),
    userAllergens: currentUserAllergens(state),
    customerFavorites: favoritesAsArray(state)
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
