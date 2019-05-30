import React from 'react';
import {
  Text,
  ConfirmButtons,
  TextField,
  Card,
  LoadableCheckbox
} from 'components';

const AddCreditCard = React.memo(props => {
  const {
    userIsAuthenticated,
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
    setCardholderName,
    setCCNumber,
    setCCExpiration,
    setCVV,
    setZip,
    toggleSetDefault,
    setAsDefaultIsSelected,
    localesContext
  } = props;

  const { Language } = localesContext;

  return (
    <Card
      className="AddCreditCard pt1_5 pb1 bg-color-gray-lighter col-12"
      variant="payment-methods"
    >
      <div className="px1">
        <div className="text-bold pb1_5">
          <Text size="cta">{Language.t('addCreditCard.header')}</Text>
        </div>
        <div className="mb1 p1 radius-sm shadow-md bg-color-white">
          <TextField
            onBlur={validateCardHolderName}
            className="mb_5"
            value={cardHolderName}
            label={Language.t('addCreditCard.cardHolderName')}
            onChange={value => setCardholderName({ cardHolderName: value })}
            errors={cardHolderNameErrors}
          />
          <TextField
            onBlur={validateCCN}
            className="mb_5"
            value={ccNumber}
            label={Language.t('addCreditCard.cardNumber')}
            onChange={value => setCCNumber({ ccNumber: value })}
            errors={ccNumberErrors}
          />
          <TextField
            onBlur={validateExpiration}
            className="mb_5"
            value={ccExpiration}
            label={Language.t('addCreditCard.expiration')}
            onChange={value => setCCExpiration({ ccExpiration: value })}
            errors={ccExpirationErrors}
          />
          <TextField
            onBlur={validateZip}
            className="mb_5"
            value={ccZip}
            label={Language.t('addCreditCard.zip')}
            onChange={value => setZip({ ccZip: value })}
            errors={ccZipErrors}
          />
          <TextField
            onBlur={validateCVV}
            className="mb_5"
            value={ccCvv}
            label={Language.t('addCreditCard.cvv')}
            onChange={value => setCVV({ ccCvv: value })}
            errors={ccCvvErrors}
          />
          {userIsAuthenticated && (
            <LoadableCheckbox
              id="selectNewAsDefaultCheck"
              className="mt1"
              isChecked={setAsDefaultIsSelected}
              onClick={toggleSetDefault}
              label={Language.t('selectPaymentMethod.saveAsDefault')}
            />
          )}
        </div>
      </div>
      <div className="pt1">
        <ConfirmButtons
          confirmButtonText={Language.t('addCreditCard.confirm')}
          handleConfirm={handleSubmit}
          cancelButtonIcon="Close"
          handleCancel={handleCancel}
        />
      </div>
    </Card>
  );
});

export default AddCreditCard;
