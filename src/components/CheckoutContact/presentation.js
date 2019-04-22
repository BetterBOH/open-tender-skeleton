import React from 'react';
import { Text, Card, TextField } from 'components';

const CheckoutContact = React.memo(
  ({
    firstName,
    lastName,
    email,
    phoneNumber,
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
          <div className="flex">
            <TextField
              className="col-12 mr1"
              value={firstName}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.firstName'
              )}
              onChange={value => handleFieldChange('firstName', value)}
              onBlur={handleOnBlur}
            />
            <TextField
              className="col-12"
              value={lastName}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.lastName'
              )}
              onChange={value => handleFieldChange('lastName', value)}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="flex mt1">
            <TextField
              className="col-12"
              value={email}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.email'
              )}
              onChange={value => handleFieldChange('email', value)}
              onBlur={handleOnBlur}
            />
          </div>
          <div className="flex mt1">
            <TextField
              className="col-12"
              value={phoneNumber}
              placeholder={localesContext.Language.t(
                'checkout.contact.placeholders.phoneNumber'
              )}
              onChange={value => handleFieldChange('phoneNumber', value)}
              onBlur={handleOnBlur}
            />
          </div>
        </form>
      </Card>
    </div>
  )
);

export default CheckoutContact;
