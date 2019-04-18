import React from 'react';
import cx from 'classnames';

import {
  Card,
  Text,
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
      className="AuthEmailCheck flex-nowrap bg-color-white text-center px1 py2"
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
      <Button className="px_5" onClick={handleCheckEmailClick}>
        <Text size="detail" className="color-gray-dark">
          Submit
        </Text>
      </Button>
      <div className="flex justify-center mt2">
        <CheckoutAsGuestButton />
      </div>
    </Card>
  );
});

export default AuthEmailCheck;
