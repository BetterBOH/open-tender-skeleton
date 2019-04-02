import React from 'react';

import {
  SelectPaymentMethod,
  ChoosePaymentType,
  PaymentDetails
} from 'components';

import { PaymentDrawerStages } from 'constants/PaymentDrawer';

const PaymentDrawer = React.memo(props => {
  const renderInner = () => {
    const {
      stage,
      switchToSelectNewPaymentMethod,
      resetDrawer,
      paymentMethodsById,
      orderRef,
      setPaymentMethod,
      switchToCreatePaymentMethod,
      switchToSelectExistingPaymentMethod,
      paymentTypes,
      selectPaymentMethodType,
      newPaymentMethodType
    } = props;

    switch (stage) {
      case PaymentDrawerStages.SelectExistingPaymentMethod:
        return (
          <SelectPaymentMethod
            confirm={switchToSelectNewPaymentMethod}
            cancel={resetDrawer}
            paymentMethodsById={paymentMethodsById}
            orderRef={orderRef}
            setPaymentMethod={setPaymentMethod}
          />
        );
      case PaymentDrawerStages.SelectNewPaymentMethod:
        return (
          <ChoosePaymentType
            confirm={switchToCreatePaymentMethod}
            cancel={switchToSelectExistingPaymentMethod}
            paymentTypes={paymentTypes}
            selectPaymentMethodType={selectPaymentMethodType}
            newPaymentMethodType={newPaymentMethodType}
          />
        );
      case PaymentDrawerStages.CreatePaymentMethod:
        return (
          <PaymentDetails
            orderRef={orderRef}
            setPaymentMethod={setPaymentMethod}
            handleCancel={switchToSelectNewPaymentMethod}
            paymentType={newPaymentMethodType}
          />
        );
      default:
        return null;
    }
  };

  return <div className="PaymentDrawer col-12">{renderInner()}</div>;
});

export default PaymentDrawer;
