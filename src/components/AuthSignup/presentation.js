import React from 'react';
import cx from 'classnames';

import { Card, Text, Button, TextField } from 'components';

const AuthSignup = React.memo(props => {
  const {
    email,
    emailWasAttempted,
    firstName,
    lastName,
    phoneNumber,
    password,
    error,
    handleFieldChange,
    handleSubmit,
    localesContext
  } = props;
  const { Language } = localesContext;

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
        <div className="col-12 flex justify-between items-center">
          <TextField
            isDisabled={emailWasAttempted}
            className={cx('col-12 my_5', {
              'TextField--has-errors':
                error === Language.t('auth.signup.errors.emailIsInvalid')
            })}
            variant="primary"
            iconLeft="At"
            type="email"
            autoComplete="email"
            placeholder={Language.t('auth.placeholders.email')}
            value={email}
            onChange={email => handleFieldChange('email', email)}
          />
        </div>
        <div className="col-12 flex justify-between items-center">
          <TextField
            className={cx('col-12 my_5 mr_5', {
              'TextField--has-errors':
                error === Language.t('auth.signup.errors.firstNameIsInvalid')
            })}
            iconLeft="User"
            variant="primary"
            type="text"
            autoComplete="given-name"
            placeholder={Language.t('auth.placeholders.firstName')}
            value={firstName}
            onChange={firstName => handleFieldChange('firstName', firstName)}
          />
          <TextField
            className={cx('col-12 my_5', {
              'TextField--has-errors':
                error === Language.t('auth.signup.errors.lastNameIsInvalid')
            })}
            variant="primary"
            type="text"
            autoComplete="family-name"
            placeholder={Language.t('auth.placeholders.lastName')}
            value={lastName}
            onChange={lastName => handleFieldChange('lastName', lastName)}
          />
        </div>
        <div className="col-12 flex justify-between items-center">
          <TextField
            className={cx('col-12 my_5', {
              'TextField--has-errors':
                error === Language.t('auth.signup.errors.phoneNumberIsInvalid')
            })}
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
        <div className="col-12 flex justify-between items-center">
          <TextField
            className={cx('col-12 my_5', {
              'TextField--has-errors':
                error === Language.t('auth.login.errors.passwordIsInvalid')
            })}
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
          className="bg-color-black px1 mt1 inline-block width-auto"
          variant="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          <Text
            size="detail"
            className="color-white uppercase text-semibold letter-spacing-sm"
          >
            {Language.t('auth.submit')}
          </Text>
        </Button>
      </form>
    </Card>
  );
});

export default AuthSignup;
