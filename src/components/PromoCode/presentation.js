import React from 'react';
import cx from 'classnames';

import { Text, TextField, ConfirmButtons } from 'components';

const PromoCode = React.memo(props => {
  const {
    promoCode,
    error,
    handleFieldChange,
    handleSubmit,
    handleClear,
    localesContext
  } = props;
  const { Language } = localesContext;

  return (
    <div className="flex flex-col justify-center text-center p1 py2">
      <div className="flex flex-col text-left mb1">
        <Text size="cta" className="bold">
          {Language.t('checkout.promoCode.havePromoCode')}
        </Text>
        <Text size="cta" className="bold">
          {Language.t('checkout.promoCode.enterHere')}
        </Text>
      </div>
      <form className="radius-sm shadow-sm bg-color-white flex flex-col px1 py_5">
        <div className="flex flex-wrap justify-between items-center">
          <TextField
            className={cx('my_5 radius-sm', {
              'TextField--errored':
                error === Language.t('checkout.errors.promoCodeIsInvalid')
            })}
            variant="secondary"
            type="text"
            placeholder={Language.t('checkout.placeholders.promoCode')}
            label={Language.t('checkout.promoCode.label')}
            value={promoCode}
            onChange={promoCode => handleFieldChange(promoCode)}
          />
        </div>
      </form>
      {!!error && (
        <Text
          className="TextField__error text-bold uppercase mx1 py_25"
          size="label-detail"
        >
          {error}
        </Text>
      )}
      <div className="col-12 flex justify-center mt2">
        <ConfirmButtons
          confirmButtonText={Language.t('checkout.promoCode.apply')}
          confirmButtonIsDisabled={!promoCode}
          handleConfirm={handleSubmit}
          handleCancel={handleClear}
        />
      </div>
    </div>
  );
});

export default PromoCode;
