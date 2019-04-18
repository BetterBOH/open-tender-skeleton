import React from 'react';
import cx from 'classnames';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

import {
  Card,
  Text,
  Button,
  Anchor,
  TextField,
  CheckoutAsGuestButton
} from 'components';

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
      <form className="AuthLogin__form radius-sm shadow-sm bg-color-white flex flex-col mt1_5 px1 relative">
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
            placeholder={Language.t('auth.placeholders.email')}
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
            autoComplete="current-password"
            placeholder={Language.t('auth.placeholders.password')}
            value={password}
            onChange={password => handleFieldChange('password', password)}
          />
          <Button className="px_5" onClick={handleSubmit}>
            <Text size="detail" className="color-gray-dark">
              Submit
            </Text>
          </Button>
        </div>
      </form>
      {!!error && (
        <Text
          className="TextField__error text-bold uppercase mx1 py_25"
          size="label-detail"
        >
          {error}
        </Text>
      )}
      <div className="mt2">
        <Text size="detail">
          <Anchor
            className="uppercase text-bold letter-spacing-sm color-gray-dark"
            url={get(getConfig(ConfigKeys.ROUTES), 'reset.path')}
          >
            {Language.t('auth.forgotPassword')}
          </Anchor>
        </Text>
      </div>
      <div className="flex justify-center mt2">
        <CheckoutAsGuestButton />
      </div>
    </Card>
  );
});

export default AuthLogin;
