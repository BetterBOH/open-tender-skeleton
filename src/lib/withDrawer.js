import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setDrawer } from 'state/actions/ui/drawerActions';
import DrawerTypes from 'constants/DrawerTypes';

const withDrawer = WrappedComponent => {
  class ComponentWithDrawer extends Component {
    static propTypes = {
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      ...WrappedComponent.defaultProps
    };

    handleClickEditName = () => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.EDIT_NAME);
    };

    handleClickEditEmail = () => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.EDIT_EMAIL);
    };

    handleClickEditPhone = () => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.EDIT_PHONE);
    };

    handleClickEditPassword = () => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.EDIT_PASSWORD);
    };

    handleClickAddPayment = variant => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.PAYMENT_METHODS, {
        selectPaymentMethodVariant: variant
      });
    };

    handleClickEditServiceTypeTime = () => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.EDIT_SERVICE_TYPE_TIME);
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

    handleClickChangeDeliveryAddress = () => {
      const { _withDrawerActions } = this.props;

      return _withDrawerActions.setDrawer(DrawerTypes.CHANGE_DELIVERY_ADDRESS);
    };

    render() {
      return (
        <WrappedComponent
          handleClickEditName={this.handleClickEditName}
          handleClickEditEmail={this.handleClickEditEmail}
          handleClickEditPhone={this.handleClickEditPhone}
          handleClickEditPassword={this.handleClickEditPassword}
          handleClickAddPayment={this.handleClickAddPayment}
          handleClickUserAttribute={this.handleClickUserAttribute}
          handleClickChangeLocation={this.handleClickChangeLocation}
          handleClickEditServiceTypeTime={this.handleClickEditServiceTypeTime}
          handleClickChangeDeliveryAddress={
            this.handleClickChangeDeliveryAddress
          }
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
