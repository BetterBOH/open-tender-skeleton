import React from 'react';
import matchServerErrorCodes from 'utils/matchServerErrorCodes';

import { TextField } from 'components';

const AddPromoCode = React.memo(
  ({ localesContext, promoCode, handleChange, handleBlur, error }) => {
    const { Language } = localesContext;
    const formattedError = matchServerErrorCodes(error, Language);
    const errors = !!formattedError ? [formattedError] : [];

    return (
      <div className="AddPromoCode relative">
        <TextField
          className="my_5 radius-sm"
          variant="secondary"
          type="text"
          placeholder={Language.t('checkout.placeholders.promoCode')}
          value={promoCode}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
        />
      </div>
    );
  }
);

export default AddPromoCode;
