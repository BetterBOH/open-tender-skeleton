import React from 'react';
import cx from 'classnames';

import { Card, Text, Button, TextField } from 'components';

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
    <Card className="AuthEmailCheck flex-nowrap text-center px1 py2">
      <Text size="headline">{Language.t('auth.emailCheck.haveAccount')}</Text>
      <Text size="description" className="color-gray-dark mt1_5">
        {Language.t('auth.emailCheck.enterEmail')}
      </Text>
      <Text size="description" className="color-gray-dark">
        {Language.t('auth.emailCheck.willAskForPassword')}
      </Text>
      <div className="AuthEmailCheck__form radius-sm shadow-sm bg-color-white flex justify-between items-center mt1_5 px1 relative">
        <TextField
          className={cx('my_5 radius-sm', { 'TextField--errored': error })}
          variant="primary"
          iconLeft="At"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleCheckEmailChange}
        />
        <Button className="ml_5" onClick={handleCheckEmailClick}>
          <Text size="detail" className="color-gray-dark">
            Submit
          </Text>
        </Button>
      </div>
      {error && (
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

export default AuthEmailCheck;
