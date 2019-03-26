import React from 'react';
import {
  AddPaymentTypeItem,
  Text,
  Button,
  Icon,
  ConfirmButtons,
  TextField
} from 'components';

const AddCreditCard = React.memo(props => {
  const {
    paymentTypes,
    submit,
    cancel,
    errors,
    cardHolderName,
    ccNumber,
    ccExpiration,
    ccZip,
    ccCvv,
    setField
  } = props;
  if (paymentTypes) {
    paymentTypes.push(paymentTypes[0]);
  }

  return (
    <div className="AddCreditCard bg-color-gray-light p1 col12">
      <div className="col12 AddCreditCard--padding-bottom">
        <Text size="cta" className="break-word">
          Please enter your payment details
        </Text>
      </div>
      <div className="AddCreditCard--padding-bottom AddCreditCard--container shadow-md bg-color-white p1 mb1">
        <TextField
          className="bg-color-gray-light"
          value={cardHolderName}
          label={'Cardholder Name'}
          onChange={value => setField({ cardHolderName: value })}
        />
        {errors.cardHolderName ? <Text>{errors.cardHolderName}</Text> : null}
        <TextField
          className="bg-color-gray-light"
          value={ccNumber}
          label={'Card Number'}
          onChange={value => setField({ ccNumber: value })}
        />
        {errors.ccNumber ? <Text>{errors.ccNumber}</Text> : null}
        <TextField
          className="bg-color-gray-light"
          value={ccExpiration}
          label={'Expiration Date'}
          onChange={value => setField({ ccExpiration: value })}
        />
        {errors.ccExpiration ? <Text>{errors.ccExpiration}</Text> : null}
        <TextField
          className="bg-color-gray-light"
          value={ccZip}
          label={'Zip'}
          onChange={value => setField({ ccZip: value })}
        />
        {errors.ccZip ? <Text>{errors.ccZip}</Text> : null}
        <TextField
          className="bg-color-gray-light"
          value={ccCvv}
          label={'CVV'}
          onChange={value => setField({ ccCvv: value })}
        />
        {errors.ccCvv ? <Text>{errors.ccCvv}</Text> : null}
      </div>
      <div>
        <ConfirmButtons
          confirmButtonText={'Submit Details'}
          handleConfirm={submit}
          cancelButtonIcon={'Clear'}
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default AddCreditCard;
