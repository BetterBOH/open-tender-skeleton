import React from 'react';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';
import {
  Card,
  Text,
  Anchor,
  Button,
  TextField,
  CheckoutAsGuestButton
} from 'components';

const AuthEmailCheck = React.memo(props => {
  const {
    email,
    error,
    handleCheckEmailChange,
    handleCheckEmailClick,
    localesContext
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
      <div className="col-12 md:col-6 flex flex-wrap justify-center mxauto mt1">
        <Button
          className="bg-color-black col-12"
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
        <div className="flex justify-center mt2">
          <CheckoutAsGuestButton />
        </div>
      </div>
    </Card>
  );
});

export default AuthEmailCheck;
