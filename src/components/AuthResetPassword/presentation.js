import React from 'react';

import { Card, Text, Button } from 'components';

const AuthResetPassword = React.memo(
  ({
    email,
    password,
    confirmPassword,
    tokenIsPresent,
    error,
    handleFieldChange,
    handleSubmit,
    handleSendLink
  }) => (
    <Card className="p1">
      <Text size="headline">Reset Password</Text>
      <form>
        {tokenIsPresent ? (
          <div>
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={e => {
                const { value } = e.target;
                return handleFieldChange('password', value);
              }}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => {
                const { value } = e.target;
                return handleFieldChange('confirmPassword', value);
              }}
            />
            <Button onClick={handleSubmit}>Reset Password</Button>
          </div>
        ) : (
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => {
                const { value } = e.target;
                return handleFieldChange('email', value);
              }}
            />
            <Button onClick={handleSendLink}>Send reset link</Button>
          </div>
        )}
        {error && <p>{error}</p>}
      </form>
    </Card>
  )
);

export default AuthResetPassword;
