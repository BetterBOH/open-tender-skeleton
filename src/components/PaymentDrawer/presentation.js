import React from 'react';

import {
  SelectPaymentMethod,
  ChoosePaymentType,
  PaymentDetails
} from 'components';

const PaymentDrawer = React.memo(props => {
  const renderInner = () => {
    const {
      screen,
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

    switch (screen) {
      case 'SelectExistingPaymentMethod':
        return (
          <SelectPaymentMethod
            confirm={switchToSelectNewPaymentMethod}
            cancel={resetDrawer}
            paymentMethodsById={paymentMethodsById}
            orderRef={orderRef}
            setPaymentMethod={setPaymentMethod}
          />
        );
      case 'SelectNewPaymentMethod':
        return (
          <ChoosePaymentType
            confirm={switchToCreatePaymentMethod}
            cancel={switchToSelectExistingPaymentMethod}
            paymentTypes={paymentTypes}
            selectPaymentMethodType={selectPaymentMethodType}
            newPaymentMethodType={newPaymentMethodType}
          />
        );
      case 'CreatePaymentMethod':
        return (
          <PaymentDetails
            orderRef={orderRef}
            setPaymentMethod={setPaymentMethod}
            cancel={switchToSelectNewPaymentMethod}
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
