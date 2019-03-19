import React from 'react';

import { Card, Text, Button } from 'components';

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
    <Card className="text-center p1">
      <Text size="headline">{Language.t('auth.emailCheck.haveAccount')}</Text>
      <Text size="description" className="color-gray-dark mt1_5">
        {Language.t('auth.emailCheck.enterEmail')}
      </Text>
      <Text size="description" className="color-gray-dark">
        {Language.t('auth.emailCheck.willAskForPassword')}
      </Text>
      <form>
        <input type="email" value={email} onChange={handleCheckEmailChange} />
        <Button onClick={handleCheckEmailClick}>Check Email</Button>
        {error && <p>{error}</p>}
      </form>
    </Card>
  );
});

export default AuthEmailCheck;
