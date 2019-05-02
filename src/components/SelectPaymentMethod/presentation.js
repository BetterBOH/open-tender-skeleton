import React from 'react';
import { SelectPaymentMethodItem, Text, ConfirmButtons } from 'components';
import {
  ADD_PAYMENT_METHOD,
  SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT
} from 'constants/PaymentMethods';

const SelectPaymentMethod = React.memo(props => {
  const {
    localesContext,
    confirm,
    cancel,
    paymentMethodsById,
    selectedPaymentTypeId,
    selectExistingPaymentMethod,
    variant
  } = props;

  const { Language } = localesContext;

  const headerText =
    variant === SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT
      ? Language.t('selectPaymentMethod.editAccountHeader')
      : Language.t('selectPaymentMethod.editOrderHeader');
  const confirmButtonText =
    variant === SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT &&
    selectedPaymentTypeId &&
    selectedPaymentTypeId !== ADD_PAYMENT_METHOD
      ? Language.t('selectPaymentMethod.delete')
      : Language.t('selectPaymentMethod.confirm');

  return (
    <div className="SelectPaymentMethod bg-color-gray-light col-12 pt1_5 pb1">
      <div className="px1">
        <div className="col-12 pb1_5">
          <Text size="cta">{headerText}</Text>
        </div>
        <div className="SelectPaymentMethod__items-container overflow-y-scroll ">
          {Object.keys(paymentMethodsById).map(paymentId => {
            return (
              <SelectPaymentMethodItem
                confirm={() => confirm(paymentMethodsById[paymentId])}
                isSelected={selectedPaymentTypeId === parseInt(paymentId)}
                selectExistingPaymentMethod={selectExistingPaymentMethod}
                key={paymentId}
                paymentMethod={paymentMethodsById[paymentId]}
              />
            );
          })}
          <SelectPaymentMethodItem
            addPaymentMethod={true}
            isSelected={selectedPaymentTypeId === ADD_PAYMENT_METHOD}
            selectExistingPaymentMethod={selectExistingPaymentMethod}
            key={ADD_PAYMENT_METHOD}
          />
        </div>
      </div>
      <div className="pt1">
        <ConfirmButtons
          confirmButtonIsDisabled={!selectedPaymentTypeId}
          confirmButtonText={confirmButtonText}
          handleConfirm={confirm}
          cancelButtonIcon="Close"
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default SelectPaymentMethod;
