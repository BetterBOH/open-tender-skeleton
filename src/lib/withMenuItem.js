import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addLineItem,
  removeLineItem,
  setLineItemQuantity
} from 'brandibble-redux';
import get from 'utils/get';

const withMenuItem = WrappedComponent => {
  class WithMenuItem extends Component {
    static defaultProps = {
      quantity: 0
    };

    updateQuantity = quantity => {
      const { item } = this.props;

      switch (quantity) {
        case 0:
          return this.removeMenuItem();
        case 1:
          return this.addMenuItem();
        default:
          return this.editMenuItem(quantity);
      }
    };

    addMenuItem = () => {
      const { item, actions, orderRef } = this.props;
    };

    removeMenuItem = () => {
      const { item, actions, orderRef } = this.props;
    };

    editMenuItem = quantity => {
      const { item, actions, orderRef } = this.props;
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          updateQuantity={this.updateQuantity}
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
  )(WithMenuItem);
};

export default withMenuItem;
