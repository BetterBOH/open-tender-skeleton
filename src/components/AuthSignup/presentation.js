import React from 'react';
import { Status } from 'brandibble-redux';
import get from 'utils/get';

import { Card, Text, Button, TextField } from 'components';

const AuthSignup = React.memo(props => {
  const {
    email,
    emailWasAttempted,
    firstName,
    lastName,
    phoneNumber,
    password,
    errors,
    createAndAuthenticateUserStatus,
    handleFieldChange,
    handleSubmit,
    localesContext
  } = props;
  const { Language } = localesContext;
  const formIsPending = createAndAuthenticateUserStatus === Status.PENDING;

  return (
    <Card
      variant="auth"
      className="AuthSignup flex-nowrap text-center p1 py2 bg-color-white"
    >
      <Text size="headline" className="mx1">
        {Language.t('auth.signup.enterDetails')}
      </Text>
      <form
        className="AuthSignup__form col-12 flex flex-wrap justify-center mt1_5 relative"
        onSubmit={e => e.preventDefault()}
      >
        <div className="col-12">
          <TextField
            isDisabled={emailWasAttempted}
            errors={get(errors, 'email')}
            variant="primary"
            iconLeft="At"
            type="email"
            autoComplete="email"
            placeholder={Language.t('auth.placeholders.email')}
            value={email}
            onChange={email => handleFieldChange('email', email)}
          />
        </div>
        <div className="col-12 flex items-start mt1">
          <TextField
            className="mr1"
            errors={get(errors, 'firstName')}
            iconLeft="User"
            variant="primary"
            type="text"
            autoComplete="given-name"
            placeholder={Language.t('auth.placeholders.firstName')}
            value={firstName}
            onChange={firstName => handleFieldChange('firstName', firstName)}
          />
          <TextField
            errors={get(errors, 'lastName')}
            variant="primary"
            type="text"
            autoComplete="family-name"
            placeholder={Language.t('auth.placeholders.lastName')}
            value={lastName}
            onChange={lastName => handleFieldChange('lastName', lastName)}
          />
        </div>
        <div className="col-12 flex justify-between items-center mt1">
          <TextField
            errors={get(errors, 'phoneNumber')}
            variant="primary"
            iconLeft="Phone"
            type="text"
            autoComplete="tel"
            placeholder={Language.t('auth.placeholders.phoneNumber')}
            value={phoneNumber}
            onChange={phoneNumber =>
              handleFieldChange('phoneNumber', phoneNumber)
            }
          />
        </div>
        <div className="col-12 flex justify-between items-center mt1">
          <TextField
            errors={get(errors, 'password')}
            variant="primary"
            iconLeft="Lock"
            type="password"
            autoComplete="new-password"
            placeholder={Language.t('auth.placeholders.password')}
            value={password}
            onChange={password => handleFieldChange('password', password)}
          />
        </div>
        <Button
          isDisabled={formIsPending}
          className="bg-color-black px2 mt1 inline-block width-auto"
          disabledClassName="bg-color-gray-dark"
          variant="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          <Text
            size="detail"
            className="color-white uppercase text-semibold letter-spacing-sm"
          >
            {formIsPending
              ? Language.t('auth.signup.loading')
              : Language.t('auth.submit')}
          </Text>
        </Button>
      </form>
    </Card>
  );
});

export default AuthSignup;
