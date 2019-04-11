import React from 'react';
import cx from 'classnames';

import {
  SelectPaymentMethod,
  ChoosePaymentType,
  PaymentDetails
} from 'components';

import { Stages } from 'constants/PaymentMethods';

const PaymentMethods = React.memo(
  ({
    actions,
    className,
    onClose,
    currentStage,
    switchToSelectNewPaymentMethod,
    paymentMethodsById,
    orderRef,
    openTenderRef,
    switchToCreatePaymentMethod,
    switchToSelectExistingPaymentMethod,
    paymentTypes,
    selectPaymentMethodType,
    newPaymentMethodType
  }) => {
    const renderInner = () => {
      switch (currentStage) {
        case Stages.SelectExistingPaymentMethod:
          return (
            <SelectPaymentMethod
              actions={actions}
              confirm={switchToSelectNewPaymentMethod}
              cancel={onClose}
              paymentMethodsById={paymentMethodsById}
              orderRef={orderRef}
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
              actions={actions}
              orderRef={orderRef}
              openTenderRef={openTenderRef}
              handleCancel={switchToSelectNewPaymentMethod}
              paymentType={newPaymentMethodType}
            />
          );
        default:
          return null;
      }
    };

    return (
      <div className={cx('PaymentMethod col-12', className)}>
        {renderInner()}
      </div>
    );
  }
);

export default PaymentMethods;
