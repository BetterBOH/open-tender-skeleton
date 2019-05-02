import React from 'react';
import { Status } from 'brandibble-redux';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

import { Card, Text, Button, Anchor, TextField, Icon } from 'components';

const AuthLogin = React.memo(props => {
  const {
    email,
    emailWasAttempted,
    password,
    errors,
    authenticateUserStatus,
    handleFieldChange,
    handleSubmit,
    localesContext,
    brandContext
  } = props;
  const { Language } = localesContext;
  const formIsPending = authenticateUserStatus === Status.PENDING;

  return (
    <Card
      variant="auth"
      className="AuthLogin bg-color-white text-center p1 py2"
    >
      <Text size="headline" className="mx1">
        {Language.t('auth.login.enterPassword')}
      </Text>
      {emailWasAttempted && (
        <Text size="description" className="color-gray-dark mx2 mt1_5">
          {Language.t('auth.login.emailHasAccount')}
        </Text>
      )}
      <form
        className="AuthLogin__form col-12 mt1_5 relative"
        onSubmit={e => e.preventDefault()}
      >
        <div className="mt1">
          <TextField
            isDisabled={emailWasAttempted}
            errors={get(errors, 'email')}
            variant="primary"
            iconLeft="At"
            type="email"
            placeholder={Language.t('auth.placeholders.email')}
            value={email}
            onChange={email => handleFieldChange('email', email)}
          />
        </div>
        <div className="mt1">
          <TextField
            errors={get(errors, 'password')}
            variant="primary"
            iconLeft="Lock"
            type="password"
            autoComplete="current-password"
            placeholder={Language.t('auth.placeholders.password')}
            value={password}
            onChange={password => handleFieldChange('password', password)}
          />
        </div>
        <Button
          isDisabled={formIsPending}
          disabledClassName="bg-color-gray-dark"
          className="bg-color-black px1 mt1 inline-block width-auto"
          variant="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          <Text
            size="detail"
            className="color-white uppercase text-semibold letter-spacing-sm"
          >
            {formIsPending
              ? Language.t('auth.login.loading')
              : Language.t('auth.submit')}
          </Text>
        </Button>
      </form>
      <div className="mt1">
        <Text size="detail">
          <Anchor
            className="uppercase text-bold letter-spacing-sm color-gray-dark"
            url={get(getConfig(ConfigKeys.ROUTES), 'reset.path')}
          >
            {Language.t('auth.forgotPassword')}
          </Anchor>
        </Text>
      </div>
      <div>
        <Button
          to={get(getConfig(ConfigKeys.ROUTES), 'welcome.path')}
          variant="secondary"
          className="inline-block width-auto mt2 px2 bg-color-gray-light"
        >
          <div className="flex items-center mt_5">
            <Icon
              icon="UserCircle"
              fill={get(brandContext, 'colors.gray-dark')}
              variant="small"
              className="width-auto mt_25"
            />
            <Text
              size="detail"
              className="ml1 color-gray-dark uppercase text-bold letter-spacing-sm nowrap"
            >
              {Language.t('auth.checkoutAsGuest')}
            </Text>
          </div>
        </Button>
      </div>
    </Card>
  );
});

export default AuthLogin;
