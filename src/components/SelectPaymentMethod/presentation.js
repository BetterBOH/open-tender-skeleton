import React from 'react';
import {
  SelectPaymentMethodItem,
  Text,
  Button,
  Icon,
  ConfirmButtons
} from 'components';

const SelectPaymentMethod = React.memo(props => {
  const {
    confirm,
    cancel,
    paymentsById,
    selectedPaymentTypeId,
    selectExistingPaymentType,
    submit
  } = props;

  return (
    <div className="SelectPaymentMethod bg-color-gray-light p1">
      <div className="col12 SelectPaymentMethod--padding-bottom">
        <Text size="cta" className="break-word">
          How would you like to pay?
        </Text>
      </div>
      <div className="overflow-y-scroll SelectPaymentMethod--items-container">
        {Object.keys(paymentsById || {}).map(paymentId => {
          return (
            <SelectPaymentMethodItem
              confirm={() => this.props.submit(paymentsById[paymentId])}
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
          confirmButtonText={'Confirm Selection'}
          handleConfirm={submit}
          cancelButtonIcon={'Clear'}
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default SelectPaymentMethod;
