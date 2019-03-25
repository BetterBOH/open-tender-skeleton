import React from 'react';
import {
  AddPaymentTypeItem,
  Text,
  Button,
  Icon,
  ConfirmButtons
} from 'components';

const AddPaymentDetails = React.memo(props => {
  const { paymentTypes, confirm, cancel } = props;
  console.log('paymentTypes', paymentTypes);
  if (paymentTypes) {
    paymentTypes.push(paymentTypes[0]);
  }
  return (
    <div className="AddPaymentDetails bg-color-gray-light p1">
      <div className="col12 AddPaymentDetails--padding-bottom">
        <Text size="cta" className="break-word">
          Please enter your payment details
        </Text>
      </div>
      <div className="AddPaymentDetails--padding-bottom">
        <div className="col12" />
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

export default AddPaymentDetails;
