import React from 'react';
import { Text, ConfirmButtons, TextField } from 'components';
import cx from 'classnames';

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

  return (
    <div className="AddCreditCard pt2 pb1_5 bg-color-gray-light p1 col-12">
      <div className="col-12 pb1_5">
        <Text size="cta">{Language.t('addCreditCard.header')}</Text>
      </div>
      <div className="mb1 p1 radius-sm shadow-md bg-color-white">
        <TextField
          onBlur={validateCardHolderName}
          className={cx('bg-color-gray-light', {
            'TextField--errored': cardHolderNameErrors.length
          })}
          value={cardHolderName}
          label={Language.t('addCreditCard.cardHolderName')}
          onChange={value => setCardholderName({ cardHolderName: value })}
          errors={cardHolderNameErrors}
        />
        <TextField
          onBlur={validateCCN}
          className={cx('bg-color-gray-light', {
            'TextField--errored': ccNumberErrors.length
          })}
          value={ccNumber}
          label={Language.t('addCreditCard.cardNumber')}
          onChange={value => setCCNumber({ ccNumber: value })}
          errors={ccNumberErrors}
        />
        <TextField
          onBlur={validateExpiration}
          className={cx('bg-color-gray-light', {
            'TextField--errored': ccExpirationErrors.length
          })}
          value={ccExpiration}
          label={Language.t('addCreditCard.expiration')}
          onChange={value => setCCExpiration({ ccExpiration: value })}
          errors={ccExpirationErrors}
        />
        <TextField
          onBlur={validateZip}
          className={cx('bg-color-gray-light', {
            'TextField--errored': ccZipErrors.length
          })}
          value={ccZip}
          label={Language.t('addCreditCard.zip')}
          onChange={value => setZip({ ccZip: value })}
          errors={ccZipErrors}
        />
        <TextField
          onBlur={validateCVV}
          className={cx('bg-color-gray-light', {
            'TextField--errored': ccCvvErrors.length
          })}
          value={ccCvv}
          label={Language.t('addCreditCard.cvv')}
          onChange={value => setCVV({ ccCvv: value })}
          errors={ccCvvErrors}
        />
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
