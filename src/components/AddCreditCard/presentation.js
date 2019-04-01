import React from 'react';
import { Text, ConfirmButtons, TextField } from 'components';

const AddCreditCard = React.memo(props => {
  const {
    localesContext,
    handleCancel,
    cardHolderName,
    ccNumber,
    ccExpiration,
    ccCvv,
    ccZip,
    cardHolderNameErrors,
    ccNumberErrors,
    ccExpirationErrors,
    ccCvvErrors,
    ccZipErrors,
    validateCardHolderName,
    validateCCN,
    validateExpiration,
    validateCVV,
    validateZip,
    handleSubmit,
    setField,
    setCardholderName,
    setCCNumber,
    setCCExpiration,
    setCVV,
    setZip
  } = props;

  const { Language } = localesContext;

  const renderError = error => {
    return (
      <div>
        <Text className="TextField__error" size="detail">
          {error}
        </Text>
      </div>
    );
  };

  return (
    <div className="AddCreditCard pt2 pb1_5 bg-color-gray-light p1 col-12">
      <div className="col-12 pb1_5">
        <Text size="cta">{Language.t('addCreditCard.header')}</Text>
      </div>
      <div className="mb1 p1 radius-sm shadow-md bg-color-white">
        <TextField
          onBlur={validateCardHolderName}
          className="bg-color-gray-light"
          value={cardHolderName}
          label={Language.t('addCreditCard.cardHolderName')}
          onChange={value => setCardholderName({ cardHolderName: value })}
        />
        {cardHolderNameErrors.length
          ? cardHolderNameErrors.map(error => renderError(error))
          : null}
        <TextField
          onBlur={validateCCN}
          className="bg-color-gray-light"
          value={ccNumber}
          label={Language.t('addCreditCard.cardNumber')}
          onChange={value => setCCNumber({ ccNumber: value })}
        />
        {ccNumberErrors.length
          ? ccNumberErrors.map(error => renderError(error))
          : null}
        <TextField
          onBlur={validateExpiration}
          className="bg-color-gray-light"
          value={ccExpiration}
          label={Language.t('addCreditCard.expiration')}
          onChange={value => setCCExpiration({ ccExpiration: value })}
        />
        {ccExpirationErrors.length
          ? ccExpirationErrors.map(error => renderError(error))
          : null}
        <TextField
          onBlur={validateZip}
          className="bg-color-gray-light"
          value={ccZip}
          label={Language.t('addCreditCard.zip')}
          onChange={value => setZip({ ccZip: value })}
        />
        {ccZipErrors.length
          ? ccZipErrors.map(error => renderError(error))
          : null}
        <TextField
          onBlur={validateCVV}
          className="bg-color-gray-light"
          value={ccCvv}
          label={Language.t('addCreditCard.cvv')}
          onChange={value => setCVV({ ccCvv: value })}
        />
        {ccCvvErrors.length
          ? ccCvvErrors.map(error => renderError(error))
          : null}
      </div>
      <div className="pt1">
        <ConfirmButtons
          confirmButtonText={Language.t('addCreditCard.confirm')}
          handleConfirm={handleSubmit}
          cancelButtonIcon="Close"
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
});

export default AddCreditCard;
