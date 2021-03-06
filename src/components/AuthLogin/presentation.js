import React from 'react';
import { Status } from 'brandibble-redux';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

import {
  Card,
  Text,
  Button,
  Anchor,
  TextField,
  Icon,
  TextFieldError
} from 'components';

const AuthLogin = React.memo(props => {
  const {
    email,
    emailWasAttempted,
    password,
    errors,
    serverErrors,
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
      className="AuthLogin transition-slide-up bg-color-white text-center p1 py2"
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
            ariaLabel={Language.t('auth.placeholders.email')}
            value={email}
            onChange={email => handleFieldChange('email', email)}
          />
        </div>
        <div className="mt1">
          <TextField
            focusOnMount={email && emailWasAttempted}
            errors={get(errors, 'password')}
            variant="primary"
            iconLeft="Lock"
            type="password"
            autoComplete="current-password"
            placeholder={Language.t('auth.placeholders.password')}
            ariaLabel={Language.t('auth.placeholders.password')}
            value={password}
            onChange={password => handleFieldChange('password', password)}
          />
        </div>
        {!!serverErrors && (
          <div className="mt1">
            <TextFieldError errors={serverErrors} />
          </div>
        )}
        <Button
          isDisabled={!email || !password || formIsPending}
          enabledClassName="bg-color-gray-dark hover-bg-color-black color-white"
          disabledClassName="disabled bg-color-gray-light color-gray"
          className="px2 mt1 inline-block width-auto"
          variant="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          <Text
            size="detail"
            className="uppercase text-semibold letter-spacing-sm"
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
          className="inline-block mt2 px2 py_5 radius-xl bg-color-gray-lighter hover-bg-color-gray-light"
        >
          <div className="flex items-center">
            <Icon
              icon="UserCircle"
              fill={get(brandContext, 'colors[gray-dark]')}
              variant="small"
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
