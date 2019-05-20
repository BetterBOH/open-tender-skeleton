import React from 'react';
import { Status } from 'brandibble-redux';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';
import { Card, Text, Button, TextField, Icon } from 'components';

const AuthEmailCheck = React.memo(props => {
  const {
    email,
    error,
    validateUserEmailStatus,
    handleCheckEmailChange,
    handleCheckEmailClick,
    localesContext,
    brandContext
  } = props;
  const { Language } = localesContext;
  const formIsPending = validateUserEmailStatus === Status.PENDING;

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Card
        variant="auth"
        className="AuthEmailCheck bg-color-white justify-center text-center px1 py2"
      >
        <Text size="headline">{Language.t('auth.emailCheck.haveAccount')}</Text>
        <Text size="description" className="color-gray-dark mt1_5">
          {Language.t('auth.emailCheck.enterEmail')}
        </Text>
        <Text size="description" className="color-gray-dark">
          {Language.t('auth.emailCheck.willAskForPassword')}
        </Text>
        <div className="AuthEmailCheck__form mt1_5 relative">
          <TextField
            variant="primary"
            iconLeft="At"
            type="email"
            ariaLabel={Language.t('auth.placeholders.email')}
            placeholder={Language.t('auth.placeholders.email')}
            value={email}
            errors={error ? [error] : null}
            onChange={handleCheckEmailChange}
          />
        </div>
        <div className="col-12 mt1">
          <Button
            isDisabled={!email || formIsPending}
            className="px2"
            enabledClassName="bg-color-gray-dark color-white"
            disabledClassName="disabled bg-color-gray-light color-gray"
            variant="secondary"
            type="submit"
            onClick={handleCheckEmailClick}
          >
            <Text
              size="detail"
              className="uppercase text-semibold letter-spacing-sm"
            >
              {formIsPending
                ? Language.t('auth.loading')
                : Language.t('auth.submit')}
            </Text>
          </Button>
          <div>
            <Button
              to={get(getConfig(ConfigKeys.ROUTES), 'welcome.path')}
              variant="secondary"
              className="inline-block mt2 px1 py_25 radius-xl bg-color-gray-lighter"
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
        </div>
      </Card>
    </form>
  );
});

export default AuthEmailCheck;
