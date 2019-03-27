import React from 'react';
import { Text, ConfirmButtons, TextField } from 'components';

const AddCreditCard = React.memo(props => {
  const {
    brandContext,
    localesContext,
    cancel,
    cardHolderName,
    ccNumber,
    ccExpiration,
    ccCvv,
    ccZip,
    errors,
    submit,
    setField
  } = props;

  const { Language } = localesContext;

  return (
    <div className="AddCreditCard bg-color-gray-light p1 col12">
      <div className="col12 AddCreditCard--padding-bottom">
        <Text size="cta" className="break-word">
          {Language.t('addCreditCard.header')}
        </Text>
      </div>
      <div className="AddCreditCard--padding-bottom AddCreditCard--container shadow-md bg-color-white p1 mb1">
        <TextField
          className="bg-color-gray-light"
          value={cardHolderName}
          label={Language.t('addCreditCard.cardHolderName')}
          onChange={value => setField({ cardHolderName: value })}
        />
        {errors.cardHolderName ? (
          <Text className="AddCreditCard--error" size="detail">
            {errors.cardHolderName}
          </Text>
        ) : null}
        <TextField
          className="bg-color-gray-light"
          value={ccNumber}
          label={Language.t('addCreditCard.cardNumber')}
          onChange={value => setField({ ccNumber: value })}
        />
        {errors.ccNumber ? (
          <Text className="AddCreditCard--error" size="detail">
            {errors.ccNumber}
          </Text>
        ) : null}
        <TextField
          className="bg-color-gray-light"
          value={ccExpiration}
          label={Language.t('addCreditCard.expiration')}
          onChange={value => setField({ ccExpiration: value })}
        />
        {errors.ccExpiration ? (
          <Text className="AddCreditCard--error" size="detail">
            {errors.ccExpiration}
          </Text>
        ) : null}
        <TextField
          className="bg-color-gray-light"
          value={ccZip}
          label={Language.t('addCreditCard.zip')}
          onChange={value => setField({ ccZip: value })}
        />
        {errors.ccZip ? (
          <Text className="AddCreditCard--error" size="detail">
            {errors.ccZip}
          </Text>
        ) : null}
        <TextField
          className="bg-color-gray-light"
          value={ccCvv}
          label={Language.t('addCreditCard.cvv')}
          onChange={value => setField({ ccCvv: value })}
        />
        {errors.ccCvv ? (
          <Text className="AddCreditCard--error" size="detail">
            {errors.ccCvv}
          </Text>
        ) : null}
      </div>
      <div>
        <ConfirmButtons
          confirmButtonText={Language.t('addCreditCard.confirm')}
          handleConfirm={submit}
          cancelButtonIcon={'Clear'}
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default AddCreditCard;
