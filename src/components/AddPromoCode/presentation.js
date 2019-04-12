import React from 'react';
import cx from 'classnames';

import { TextField } from 'components';

const AddPromoCode = React.memo(
  ({ localesContext, promoCode, handleChange, handleBlur, error }) => {
    const { Language } = localesContext;

    return (
      <div className="AddPromoCode relative">
        <TextField
          className={cx('my_5 radius-sm', {
            'TextField--errored': !!error
          })}
          variant="secondary"
          type="text"
          placeholder={Language.t('checkout.placeholders.promoCode')}
          value={promoCode}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    );
  }
);

export default AddPromoCode;
