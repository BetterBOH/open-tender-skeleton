import React from 'react';
import { Text, ConfirmButtons, TextField } from 'components';

const AddCreditCard = React.memo(props => {
  const {
    localesContext,
    cancel,
    cardHolderName,
    ccNumber,
    ccExpiration,
    ccCvv,
    ccZip,
    errors,
    submit,
    setField,
    setCardholderName,
    setCCNumber,
    setCCExpiration,
    setCVV,
    setZip
  } = props;

  const { Language } = localesContext;
  return (
    <div className="AddCreditCard pt2 pb1_5 bg-color-gray-light p1 col-12">
      <div className="col-12 pb1_5">
        <Text size="cta">{Language.t('addCreditCard.header')}</Text>
      </div>
      <div className="mb1 p1 radius-sm shadow-md bg-color-white">
        <TextField
          className="bg-color-gray-light"
          value={cardHolderName}
          label={Language.t('addCreditCard.cardHolderName')}
          onChange={value => setCardholderName({ cardHolderName: value })}
        />
        {errors.cardHolderName ? (
          <Text className="TextField__error" size="detail">
            {errors.cardHolderName}
          </Text>
        ) : null}
        <TextField
          className="bg-color-gray-light"
          value={ccNumber}
          label={Language.t('addCreditCard.cardNumber')}
          onChange={value => setCCNumber({ ccNumber: value })}
        />
        {errors.ccNumber ? (
          <Text className="TextField__error" size="detail">
            {errors.ccNumber}
          </Text>
        ) : null}
        <TextField
          className="bg-color-gray-light"
          value={ccExpiration}
          label={Language.t('addCreditCard.expiration')}
          onChange={value => setCCExpiration({ ccExpiration: value })}
        />
        {errors.ccExpiration ? (
          <Text className="TextField__error" size="detail">
            {errors.ccExpiration}
          </Text>
        ) : null}
        <TextField
          className="bg-color-gray-light"
          value={ccZip}
          label={Language.t('addCreditCard.zip')}
          onChange={value => setZip({ ccZip: value })}
        />
        {errors.ccZip ? (
          <Text className="TextField__error" size="detail">
            {errors.ccZip}
          </Text>
        ) : null}
        <TextField
          className="bg-color-gray-light"
          value={ccCvv}
          label={Language.t('addCreditCard.cvv')}
          onChange={value => setCVV({ ccCvv: value })}
        />
        {errors.ccCvv ? (
          <Text className="TextField__error" size="detail">
            {errors.ccCvv}
          </Text>
        ) : null}
      </div>
      <div className="pt1">
        <ConfirmButtons
          confirmButtonText={Language.t('addCreditCard.confirm')}
          handleConfirm={submit}
          cancelButtonIcon="Close"
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default AddCreditCard;
