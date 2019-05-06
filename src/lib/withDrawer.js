import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setDrawer } from 'state/actions/ui/drawerActions';
import DrawerTypes from 'constants/DrawerTypes';
import { SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT } from 'constants/PaymentMethods';

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
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(
        DrawerTypes.EDIT_USER_ATTRIBUTE_REDIRECT
      );
    };

    handleClickChangeLocation = () => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.CHANGE_LOCATION);
    };

    render() {
      return (
        <WrappedComponent
          handleClickAddPayment={this.handleClickAddPayment}
          handleClickUserAttribute={this.handleClickUserAttribute}
          handleClickChangeLocation={this.handleClickChangeLocation}
          {...this.props}
        />
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    _withDrawerActions: bindActionCreators(
      {
        setDrawer
      },
      dispatch
    )
  });

  return connect(
    null,
    mapDispatchToProps
  )(ComponentWithDrawer);
};

export default withDrawer;
