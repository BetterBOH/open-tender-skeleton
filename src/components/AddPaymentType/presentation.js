import React from 'react';
import {
  AddPaymentTypeItem,
  Text,
  Button,
  Icon,
  ConfirmButtons
} from 'components';

const AddPaymentType = React.memo(props => {
  const { paymentTypes, confirm, cancel } = props;
  console.log('paymentTypes', paymentTypes);
  if (paymentTypes) {
    paymentTypes.push(paymentTypes[0]);
  }
  return (
    <div className="AddPaymentType bg-color-gray-light p1">
      <div className="col12 AddPaymentType--padding-bottom">
        <Text size="cta" className="break-word">
          What type of payment method would you like to add?
        </Text>
      </div>
      <div className="AddPaymentType--padding-bottom">
        {paymentTypes.map(paymentType => {
          return (
            <AddPaymentTypeItem key={paymentType} paymentType={paymentType} />
          );
        })}
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

export default AddPaymentType;
