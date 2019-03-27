import React from 'react';
import { SelectPaymentMethodItem, Text, ConfirmButtons } from 'components';

const SelectPaymentMethod = React.memo(props => {
  const {
    brandContext,
    localesContext,
    confirm,
    cancel,
    paymentsById,
    selectedPaymentTypeId,
    selectExistingPaymentType
  } = props;

  const { Language } = localesContext;

  return (
    <div className="SelectPaymentMethod bg-color-gray-light p1 col-12">
      <div className="col-12 SelectPaymentMethod--padding-bottom">
        <Text size="cta" className="break-word">
          {Language.t('selectPaymentMethod.header')}
        </Text>
      </div>
      <div className="overflow-y-scroll SelectPaymentMethod--items-container">
        {Object.keys(paymentsById || {}).map(paymentId => {
          return (
            <SelectPaymentMethodItem
              confirm={() => confirm(paymentsById[paymentId])}
              isSelected={selectedPaymentTypeId === parseInt(paymentId)}
              selectExistingPaymentType={selectExistingPaymentType}
              key={paymentId}
              payment={paymentsById[paymentId]}
            />
          );
        })}
        <SelectPaymentMethodItem
          addPaymentMethod={true}
          isSelected={selectedPaymentTypeId === 'AddPaymentMethod'}
          selectExistingPaymentType={selectExistingPaymentType}
          key={'AddPaymentMethod'}
        />
      </div>
      <div className="SelectPaymentMethod--padding-top">
        <ConfirmButtons
          confirmButtonIsDisabled={!selectedPaymentTypeId}
          confirmButtonText={Language.t('selectPaymentMethod.confirm')}
          handleConfirm={confirm}
          cancelButtonIcon={'Clear'}
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default SelectPaymentMethod;
