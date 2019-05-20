import React, { Fragment } from 'react';
import { Status } from 'brandibble-redux';
import get from 'utils/get';

import { Card, Text, Button, TextField } from 'components';

const AuthResetPassword = React.memo(props => {
  const {
    email,
    password,
    confirmPassword,
    tokenIsPresent,
    errors,
    resetUserPasswordStatus,
    finishResetUserPasswordStatus,
    handleFieldChange,
    handleSubmit,
    handleSendLink,
    localesContext
  } = props;
  const { Language } = localesContext;
  const resetFormIsPending = resetUserPasswordStatus === Status.PENDING;
  const finishResetFormIsPending =
    finishResetUserPasswordStatus === Status.PENDING;

  return (
    <Card
      variant="auth"
      className="AuthResetPassword bg-color-white text-center p1 py2"
    >
      <Text size="headline" className="mx1">
        {Language.t('auth.reset.resetPassword')}
      </Text>
      <Text size="description" className="color-gray-dark mx2 mt1_5">
        {Language.t(`auth.reset.enter${tokenIsPresent ? 'Password' : 'Email'}`)}
      </Text>
      <form
        className="AuthResetPassword__form flex flex-col mt1_5 relative"
        onSubmit={e => e.preventDefault()}
      >
        {tokenIsPresent ? (
          <Fragment>
            <div className="flex justify-between items-center">
              <TextField
                variant="primary"
                iconLeft="Lock"
                type="password"
                autoComplete="new-password"
                placeholder={Language.t('auth.placeholders.password')}
                ariaLabel={Language.t('auth.placeholders.password')}
                value={password}
                onChange={password => handleFieldChange('password', password)}
              />
            </div>
            <div className="flex justify-between items-center mt1">
              <TextField
                errors={get(errors, 'confirm')}
                iconLeft="Repeat"
                variant="primary"
                type="password"
                autoComplete="new-password"
                placeholder={Language.t('auth.placeholders.confirmPassword')}
                ariaLabel={Language.t('auth.placeholders.confirmPassword')}
                value={confirmPassword}
                onChange={confirmPassword =>
                  handleFieldChange('confirmPassword', confirmPassword)
                }
              />
            </div>
            <div className="mt1">
              <Button
                isDisabled={
                  !password || !confirmPassword || finishResetFormIsPending
                }
                className="px2 inline-block width-auto"
                enabledClassName="bg-color-gray-dark hover-bg-color-black color-white"
                disabledClassName="disabled bg-color-gray-light color-gray"
                variant="secondary"
                type="submit"
                onClick={handleSubmit}
              >
                <Text
                  size="detail"
                  className="uppercase text-semibold letter-spacing-sm"
                >
                  {finishResetFormIsPending
                    ? Language.t('auth.reset.loading')
                    : Language.t('auth.submit')}
                </Text>
              </Button>
            </div>
          </Fragment>
        ) : (
          <div className="flex flex-wrap justify-center">
            <TextField
              errors={get(errors, 'email')}
              variant="primary"
              iconLeft="At"
              type="email"
              placeholder={Language.t('auth.placeholders.email')}
              ariaLabel={Language.t('auth.placeholders.email')}
              value={email}
              onChange={email => handleFieldChange('email', email)}
            />
            <Button
              isDisabled={!email || resetFormIsPending}
              className="px2 mt1 inline-block width-auto"
              enabledClassName="bg-color-gray-dark hover-bg-color-black color-white"
              disabledClassName="disabled bg-color-gray-light color-gray"
              variant="secondary"
              type="submit"
              onClick={handleSendLink}
            >
              <Text
                size="detail"
                className="uppercase text-semibold letter-spacing-sm"
              >
                {resetFormIsPending
                  ? Language.t('auth.reset.loading')
                  : Language.t('auth.submit')}
              </Text>
            </Button>
          </div>
        )}
      </form>
    </Card>
  );
});

export default AuthResetPassword;
