import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { unauthenticateUser } from 'brandibble-redux';

import { setDrawer } from 'state/actions/ui/drawerActions';
import DrawerTypes from 'constants/DrawerTypes';
import { SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT } from 'constants/PaymentMethods';
import get from 'utils/get';
import getRoutes from 'utils/getRoutes';

const withDrawer = WrappedComponent => {
  class ComponentWithDrawer extends Component {
    static propTypes = {
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      ...WrappedComponent.defaultProps
    };

    handleClickAddPayment = () => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.PAYMENT_METHODS, {
        selectPaymentMethodVariant: SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT
      });
    };

    handleClickUserAttribute = () => {
      const { _withDrawerActions, actions, openTenderRef } = this.props;

      return _withDrawerActions.setDrawer(
        DrawerTypes.EDIT_USER_ATTRIBUTE_REDIRECT,
        {
          editAttributePath: getRoutes().DASHBOARD,
          handleClickCheckoutAsGuest: () =>
            actions.unauthenticateUser(openTenderRef)
        }
      );
    };

    render() {
      return (
        <WrappedComponent
          handleClickAddPayment={this.handleClickAddPayment}
          handleClickUserAttribute={this.handleClickUserAttribute}
          {...this.props}
        />
      );
    }
  }

  const mapStateToProps = state => ({
    openTenderRef: get(state, 'openTender.ref')
  });

  const mapDispatchToProps = dispatch => ({
    _withDrawerActions: bindActionCreators(
      {
        setDrawer
      },
      dispatch
    ),
    actions: bindActionCreators(
      {
        unauthenticateUser
      },
      dispatch
    )
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComponentWithDrawer);
};

export default withDrawer;
