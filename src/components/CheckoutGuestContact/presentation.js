import React from 'react';
import { Text, Card, TextField } from 'components';
import InputTypes from 'constants/InputTypes';

const CheckoutGuestContact = React.memo(
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
              value={values[InputTypes.FIRST_NAME]}
              errors={errors[InputTypes.FIRST_NAME]}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.firstName'
              )}
              onFocus={() => handleOnFocus(InputTypes.FIRST_NAME)}
              onChange={value =>
                handleFieldChange(InputTypes.FIRST_NAME, value)
              }
              onBlur={value => handleOnBlur(InputTypes.FIRST_NAME, value)}
            />
            <TextField
              className="col-12"
              value={values[InputTypes.LAST_NAME]}
              errors={errors[InputTypes.LAST_NAME]}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.lastName'
              )}
              onFocus={() => handleOnFocus(InputTypes.LAST_NAME)}
              onChange={value => handleFieldChange(InputTypes.LAST_NAME, value)}
              onBlur={value => handleOnBlur(InputTypes.LAST_NAME, value)}
            />
          </div>
          <div className="flex mt1">
            <TextField
              className="col-12"
              value={values[InputTypes.EMAIL]}
              errors={errors[InputTypes.EMAIL]}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.email'
              )}
              onFocus={() => handleOnFocus(InputTypes.EMAIL)}
              onChange={value => handleFieldChange(InputTypes.EMAIL, value)}
              onBlur={value => handleOnBlur(InputTypes.EMAIL, value)}
            />
          </div>
          <div className="flex mt1">
            <TextField
              className="col-12"
              value={values[InputTypes.PHONE]}
              errors={errors[InputTypes.PHONE]}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.phoneNumber'
              )}
              onFocus={() => handleOnFocus(InputTypes.PHONE)}
              onChange={value => handleFieldChange(InputTypes.PHONE, value)}
              onBlur={value => handleOnBlur(InputTypes.PHONE, value)}
            />
          </div>
        </form>
      </Card>
    </div>
  )
);

export default CheckoutGuestContact;
