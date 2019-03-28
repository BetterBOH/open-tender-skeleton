import React from 'react';
import { SelectPaymentMethodItem, Text, ConfirmButtons } from 'components';

const SelectPaymentMethod = React.memo(props => {
  const {
    localesContext,
    confirm,
    cancel,
    paymentMethodsById,
    selectedPaymentTypeId,
    selectExistingPaymentMethod
  } = props;

  const { Language } = localesContext;

  return (
    <div className="SelectPaymentMethod bg-color-gray-light p1 pt2 pb1_5 col-12">
      <div className="col-12 pb1_5">
        <Text size="cta">{Language.t('selectPaymentMethod.header')}</Text>
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
          isSelected={selectedPaymentTypeId === 'AddPaymentMethod'}
          selectExistingPaymentMethod={selectExistingPaymentMethod}
          key={'AddPaymentMethod'}
        />
      </div>
      <div className="pt1_5">
        <ConfirmButtons
          confirmButtonIsDisabled={!selectedPaymentTypeId}
          confirmButtonText={Language.t('selectPaymentMethod.confirm')}
          handleConfirm={confirm}
          cancelButtonIcon="Close"
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default SelectPaymentMethod;
