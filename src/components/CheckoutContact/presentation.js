import React from 'react';
import get from 'utils/get';
import { Text, Card, TextField } from 'components';

const CheckoutContact = React.memo(
  ({
    firstName,
    lastName,
    email,
    phoneNumber,
    errors,
    localesContext,
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
              value={firstName}
              errors={get(errors, 'firstName')}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.firstName'
              )}
              onChange={value => handleFieldChange('firstName', value)}
              onBlur={value => handleOnBlur('firstName', value)}
            />
            <TextField
              className="col-12"
              value={lastName}
              errors={get(errors, 'lastName')}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.lastName'
              )}
              onChange={value => handleFieldChange('lastName', value)}
              onBlur={value => handleOnBlur('lastName', value)}
            />
          </div>
          <div className="flex mt1">
            <TextField
              className="col-12"
              value={email}
              errors={get(errors, 'email')}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.email'
              )}
              onChange={value => handleFieldChange('email', value)}
              onBlur={value => handleOnBlur('email', value)}
            />
          </div>
          <div className="flex mt1">
            <TextField
              className="col-12"
              value={phoneNumber}
              errors={get(errors, 'phoneNumber')}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.phoneNumber'
              )}
              onChange={value => handleFieldChange('phoneNumber', value)}
              onBlur={value => handleOnBlur('phoneNumber', value)}
            />
          </div>
        </form>
      </Card>
    </div>
  )
);

export default CheckoutContact;
