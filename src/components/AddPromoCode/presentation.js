import React from 'react';
import matchServerErrorCodes from 'utils/matchServerErrorCodes';
import { TextField } from 'components';

const AddPromoCode = React.memo(
  ({ localesContext, promoCode, handleChange, handleBlur, errors }) => {
    const { Language } = localesContext;

    const formattedErrors = errors.map(error =>
      matchServerErrorCodes(error, Language)
    );

    return (
      <div className="AddPromoCode relative">
        <TextField
          className="my_5 radius-sm"
          variant="primary"
          type="text"
          placeholder={Language.t('checkout.placeholders.promoCode')}
          ariaLabel={Language.t('checkout.placeholders.promoCode')}
          value={promoCode}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={formattedErrors}
        />
      </div>
    );
  }
);

export default AddPromoCode;
