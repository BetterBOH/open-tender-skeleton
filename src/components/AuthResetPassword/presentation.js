import React from 'react';

import { Card, Text, Button } from 'components';

const AuthResetPassword = React.memo(
  ({ email, password, error, handleFieldChange, handleSubmit }) => (
    <Card className="p1">
      <Text size="headline">Reset Password</Text>
      <form>
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
        </div>
        <Button onClick={handleSubmit}>Send reset link</Button>
        {error && <p>{error}</p>}
      </form>
    </Card>
  )
);

export default AuthResetPassword;
