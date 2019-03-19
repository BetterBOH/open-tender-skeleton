import React from 'react';

import { Card, Text, Button, TextField, Icon } from 'components';

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
    <Card className="AuthEmailCheck text-center p1">
      <Text size="headline">{Language.t('auth.emailCheck.haveAccount')}</Text>
      <Text size="description" className="color-gray-dark mt1_5">
        {Language.t('auth.emailCheck.enterEmail')}
      </Text>
      <Text size="description" className="color-gray-dark">
        {Language.t('auth.emailCheck.willAskForPassword')}
      </Text>
      <div className="AuthEmailCheck__form radius-sm shadow-sm bg-color-white flex justify-between items-center mt1_5 px1 relative">
        <Icon icon="At" className="TextField__icon color-gray-dark" />
        <TextField
          className="w100"
          variant="primary"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleCheckEmailChange}
        />
        <Button onClick={handleCheckEmailClick}>
          <Text size="detail" className="color-gray-dark">
            Submit
          </Text>
        </Button>
      </div>
      {error && <p>{error}</p>}
    </Card>
  );
});

export default AuthEmailCheck;
