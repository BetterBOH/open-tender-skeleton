import React from 'react';
import {
  SelectPaymentMethodItem,
  Text,
  Button,
  Icon,
  ConfirmButtons
} from 'components';

const SelectPaymentMethod = React.memo(props => {
  const { paymentTypes, confirm, cancel } = props;
  console.log('paymentTypes', paymentTypes);
  if (paymentTypes) {
    paymentTypes.push(paymentTypes[0]);
  }
  return (
    <div className="SelectPaymentMethod bg-color-gray-light p1">
      <div className="col12 SelectPaymentMethod--padding-bottom">
        <Text size="cta" className="break-word">
          How would you like to pay?
        </Text>
      </div>
      <div className="SelectPaymentMethod--padding-bottom">
        <SelectPaymentMethodItem />
      </div>
      <div>
        <ConfirmButtons
          confirmButtonText={'Confirm Selection'}
          handleConfirm={confirm}
          cancelButtonIcon={'Clear'}
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default SelectPaymentMethod;
