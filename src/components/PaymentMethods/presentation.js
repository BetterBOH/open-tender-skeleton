import React from 'react';

import {
  SelectPaymentMethod,
  ChoosePaymentType,
  PaymentDetails
} from 'components';

import { Stages } from 'constants/PaymentMethods';

const PaymentMethods = React.memo(
  ({
    actions,
    orderRef,
    openTenderRef,
    userIsAuthenticated,
    paymentTypes,
    paymentMethodsById,
    onClose,
    currentStage,
    newPaymentMethodType,
    selectPaymentMethodVariant,
    switchToSelectExistingPaymentMethod,
    switchToSelectNewPaymentMethodType,
    switchToCreatePaymentMethod,
    selectPaymentMethodType,
    defaultPaymentMethodId,
    setDefaultPaymentIsPending
  }) => {
    const renderInner = () => {
      switch (currentStage) {
        case Stages.SELECT_EXISTING_PAYMENT_METHOD:
          return (
            <SelectPaymentMethod
              variant={selectPaymentMethodVariant}
              actions={actions}
              switchToSelectNewPaymentMethodType={
                switchToSelectNewPaymentMethodType
              }
              handleCancel={onClose}
              paymentMethodsById={paymentMethodsById}
              orderRef={orderRef}
              openTenderRef={openTenderRef}
              defaultPaymentMethodId={defaultPaymentMethodId}
              setDefaultPaymentIsPending={setDefaultPaymentIsPending}
            />
          );
        case Stages.SELECT_NEW_PAYMENT_METHOD_TYPE:
          return (
            <ChoosePaymentType
              switchToCreatePaymentMethod={switchToCreatePaymentMethod}
              switchToSelectExistingPaymentMethod={
                switchToSelectExistingPaymentMethod
              }
              paymentTypes={paymentTypes}
              newPaymentMethodType={newPaymentMethodType}
              selectPaymentMethodType={selectPaymentMethodType}
            />
          );
        case Stages.CREATE_PAYMENT_METHOD:
          return (
            <PaymentDetails
              actions={actions}
              orderRef={orderRef}
              openTenderRef={openTenderRef}
              userIsAuthenticated={userIsAuthenticated}
              handleCancel={onClose}
              paymentType={newPaymentMethodType}
            />
          );
        default:
          return null;
      }
    };

    return (
      <div className="PaymentMethods bg-color-gray-lighter">
        {renderInner()}
      </div>
    );
  }
);

export default PaymentMethods;
