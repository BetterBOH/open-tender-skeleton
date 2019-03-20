import React, { Fragment } from 'react';
import cx from 'classnames';

import { Card, Text, Button, TextField, Icon } from 'components';

const AuthResetPassword = React.memo(props => {
  const {
    email,
    password,
    confirmPassword,
    tokenIsPresent,
    error,
    handleFieldChange,
    handleSubmit,
    handleSendLink,
    localesContext
  } = props;
  const { Language } = localesContext;

  return (
    <Card className="AuthResetPassword flex-nowrap text-center p1 py2">
      <Text size="headline" className="mx1">
        {Language.t('auth.reset.resetPassword')}
      </Text>
      <Text size="description" className="color-gray-dark mx2 mt1_5">
        {Language.t(`auth.reset.enter${tokenIsPresent ? 'Password' : 'Email'}`)}
      </Text>
      <form className="AuthResetPassword__form radius-sm shadow-sm bg-color-white flex flex-col mt1_5 px1 relative">
        {tokenIsPresent ? (
          <Fragment>
            <div className="flex justify-between items-center">
              <TextField
                className={cx('my_5 radius-sm', {
                  'TextField--errored':
                    error === Language.t('auth.reset.errors.passwordIsInvalid')
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
            <div className="flex justify-between items-center border-top">
              <Icon
                icon="Lock"
                className="TextField__icon mr5 color-gray-dark"
              />
              <div className="w100 flex justify-between items-center ml_5">
                <TextField
                  className={cx('my_5 radius-sm', {
                    'TextField--errored':
                      error === Language.t('auth.reset.errors.passwordMismatch')
                  })}
                  variant="primary"
                  type="password"
                  autoComplete="new-password"
                  placeholder={Language.t('auth.placeholders.confirmPassword')}
                  value={confirmPassword}
                  onChange={confirmPassword =>
                    handleFieldChange('confirmPassword', confirmPassword)
                  }
                />
                <Button className="px_5" onClick={handleSubmit}>
                  <Text size="detail" className="color-gray-dark">
                    Submit
                  </Text>
                </Button>
              </div>
            </div>
          </Fragment>
        ) : (
          <div className="flex justify-between items-center">
            <TextField
              className={cx('my_5 radius-sm', {
                'TextField--errored':
                  error === Language.t('auth.reset.errors.emailIsInvalid')
              })}
              variant="primary"
              iconLeft="At"
              type="email"
              placeholder={Language.t('auth.placeholders.email')}
              value={email}
              onChange={email => handleFieldChange('email', email)}
            />
            <Button className="px_5" onClick={handleSendLink}>
              <Text size="detail" className="color-gray-dark">
                Submit
              </Text>
            </Button>
          </div>
        )}
      </form>
      {!!error && (
        <Text
          className="TextField__error text-bold uppercase mx1 py_25"
          size="label-detail"
        >
          {error}
        </Text>
      )}
    </Card>
  );
});

export default AuthResetPassword;
