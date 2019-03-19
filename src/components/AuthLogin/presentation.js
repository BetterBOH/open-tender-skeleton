import React from 'react';
import cx from 'classnames';

import { Card, Text, Button, Anchor, TextField } from 'components';

const AuthLogin = React.memo(props => {
  const {
    email,
    emailWasAttempted,
    password,
    error,
    handleFieldChange,
    handleSubmit,
    localesContext
  } = props;
  const { Language } = localesContext;

  return (
    <Card className="AuthLogin flex-nowrap text-center p1 py2">
      <Text size="headline" className="mx1">
        {Language.t('auth.login.enterPassword')}
      </Text>
      {emailWasAttempted && (
        <Text size="description" className="color-gray-dark mx2 mt1_5">
          {Language.t('auth.login.emailHasAccount')}
        </Text>
      )}
      <div className="AuthLogin__form radius-sm shadow-sm bg-color-white flex flex-col mt1_5 px1 relative">
        <div className="flex justify-between items-center">
          <TextField
            isDisabled={emailWasAttempted}
            className={cx('my_5 radius-sm', {
              'TextField--errored':
                error === Language.t('auth.login.errors.emailIsInvalid')
            })}
            variant="primary"
            iconLeft="At"
            type="email"
            placeholder="Email"
            value={email}
            onChange={email => handleFieldChange('email', email)}
          />
        </div>
        <div className="flex justify-between items-center border-top">
          <TextField
            className={cx('my_5 radius-sm', {
              'TextField--errored':
                error === Language.t('auth.login.errors.passwordIsInvalid')
            })}
            variant="primary"
            iconLeft="Lock"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={password => handleFieldChange('password', password)}
          />
          <Button className="ml_5" onClick={handleSubmit}>
            <Text size="detail" className="color-gray-dark">
              Submit
            </Text>
          </Button>
        </div>
      </div>
      {!!error && (
        <Text
          className="TextField__error text-bold uppercase mx1 py_25"
          size="label-detail"
        >
          {error}
        </Text>
      )}
      <div className="mt2">
        <Anchor url="/auth/reset">
          <Text size="detail" className="text-extrabold uppercase color-gray">
            {Language.t('auth.login.forgotPassword')}
          </Text>
        </Anchor>
      </div>
    </Card>
  );
});

export default AuthLogin;
