import React from 'react';
import { Text, Card, TextField } from 'components';
import { InputTypes } from 'constants/Forms';
const { FIRST_NAME, LAST_NAME, EMAIL, PHONE } = InputTypes;

const CheckoutContact = React.memo(
  ({
    values,
    errors,
    localesContext,
    handleOnFocus,
    handleFieldChange,
    handleOnBlur
  }) => (
    <div>
      <div className="mb1">
        <Text size="cta" className="bold">
          {localesContext.Language.t('checkout.contact.title')}
        </Text>
      </div>
      <Card className="p1_5">
        <form onSubmit={e => e.preventDefault()}>
          <div className="flex items-start">
            <TextField
              className="col-12 mr1"
              value={values[FIRST_NAME]}
              errors={errors[FIRST_NAME]}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.firstName'
              )}
              onFocus={() => handleOnFocus(FIRST_NAME)}
              onChange={value => handleFieldChange(FIRST_NAME, value)}
              onBlur={value => handleOnBlur(FIRST_NAME, value)}
            />
            <TextField
              className="col-12"
              value={values[LAST_NAME]}
              errors={errors[LAST_NAME]}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.lastName'
              )}
              onFocus={() => handleOnFocus(LAST_NAME)}
              onChange={value => handleFieldChange(LAST_NAME, value)}
              onBlur={value => handleOnBlur(LAST_NAME, value)}
            />
          </div>
          <div className="flex mt1">
            <TextField
              className="col-12"
              value={values[EMAIL]}
              errors={errors[EMAIL]}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.email'
              )}
              onFocus={() => handleOnFocus(EMAIL)}
              onChange={value => handleFieldChange(EMAIL, value)}
              onBlur={value => handleOnBlur(EMAIL, value)}
            />
          </div>
          <div className="flex mt1">
            <TextField
              className="col-12"
              value={values[PHONE]}
              errors={errors[PHONE]}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.phoneNumber'
              )}
              onFocus={() => handleOnFocus(PHONE)}
              onChange={value => handleFieldChange(PHONE, value)}
              onBlur={value => handleOnBlur(PHONE, value)}
            />
          </div>
        </form>
      </Card>
    </div>
  )
);

export default CheckoutContact;
