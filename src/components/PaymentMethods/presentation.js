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
    onClose,
    currentStage,
    switchToSelectNewPaymentMethod,
    paymentMethodsById,
    orderRef,
    openTenderRef,
    switchToCreatePaymentMethod,
    switchToSelectExistingPaymentMethod,
    selectPaymentMethodType,
    newPaymentMethodType,
    userIsAuthenticated,
    selectPaymentMethodVariant,
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
              confirm={switchToSelectNewPaymentMethod}
              cancel={onClose}
              paymentMethodsById={paymentMethodsById}
              orderRef={orderRef}
              openTenderRef={openTenderRef}
              userIsAuthenticated={userIsAuthenticated}
              defaultPaymentMethodId={defaultPaymentMethodId}
              setDefaultPaymentIsPending={setDefaultPaymentIsPending}
            />
          );
        case Stages.SELECT_NEW_PAYMENT_METHOD:
          return (
            <ChoosePaymentType
              confirm={switchToCreatePaymentMethod}
              cancel={switchToSelectExistingPaymentMethod}
              selectPaymentMethodType={selectPaymentMethodType}
              newPaymentMethodType={newPaymentMethodType}
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
