import React from 'react';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';
import { Card, Text, Button, TextField, Icon } from 'components';

const AuthEmailCheck = React.memo(props => {
  const {
    email,
    error,
    handleCheckEmailChange,
    handleCheckEmailClick,
    localesContext,
    brandContext
  } = props;
  const { Language } = localesContext;

  return (
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
          placeholder={Language.t('auth.placeholders.email')}
          value={email}
          errors={error ? [error] : null}
          onChange={handleCheckEmailChange}
        />
      </div>
      <div className="col-12 mt1">
        <Button
          className="bg-color-black px1"
          variant="secondary"
          onClick={handleCheckEmailClick}
        >
          <Text
            size="detail"
            className="color-white uppercase text-semibold letter-spacing-sm"
          >
            {Language.t('auth.submit')}
          </Text>
        </Button>
        <div>
          <Button
            to={get(getConfig(ConfigKeys.ROUTES), 'welcome.path')}
            variant="secondary"
            className="inline-block width-auto mt2 px1 bg-color-gray-light"
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
                className="ml1 color-gray-dark uppercase text-semibold letter-spacing-sm nowrap"
              >
                {Language.t('auth.checkoutAsGuest')}
              </Text>
            </div>
          </Button>
        </div>
      </div>
    </Card>
  );
});

export default AuthEmailCheck;
