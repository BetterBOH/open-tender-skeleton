import React from 'react';

import {
  SelectPaymentMethod,
  ChoosePaymentType,
  PaymentDetails
} from 'components';

import { Stages } from 'constants/PaymentMethods';

const PaymentMethods = React.memo(props => {
  const renderInner = () => {
    const {
      stage,
      switchToSelectNewPaymentMethod,
      resetDrawer,
      paymentMethodsById,
      orderRef,
      openTenderRef,
      setPaymentMethod,
      createPayment,
      switchToCreatePaymentMethod,
      switchToSelectExistingPaymentMethod,
      paymentTypes,
      selectPaymentMethodType,
      newPaymentMethodType
    } = props;

    switch (stage) {
      case Stages.SelectExistingPaymentMethod:
        return (
          <SelectPaymentMethod
            confirm={switchToSelectNewPaymentMethod}
            cancel={resetDrawer}
            paymentMethodsById={paymentMethodsById}
            orderRef={orderRef}
            setPaymentMethod={setPaymentMethod}
          />
        );
      case Stages.SelectNewPaymentMethod:
        return (
          <ChoosePaymentType
            confirm={switchToCreatePaymentMethod}
            cancel={switchToSelectExistingPaymentMethod}
            paymentTypes={paymentTypes}
            selectPaymentMethodType={selectPaymentMethodType}
            newPaymentMethodType={newPaymentMethodType}
          />
        );
      case Stages.CreatePaymentMethod:
        return (
          <PaymentDetails
            orderRef={orderRef}
            openTenderRef={openTenderRef}
            createPayment={createPayment}
            handleCancel={switchToSelectNewPaymentMethod}
            paymentType={newPaymentMethodType}
          />
        );
      default:
        return null;
    }
  };

  return <div className="PaymentMethod col-12">{renderInner()}</div>;
});

export default PaymentMethods;
