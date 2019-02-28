import React from 'react';

import { Card, Text, Button, Anchor } from 'components';

const AuthLogin = React.memo(
  ({ email, password, error, handleFieldChange, handleSubmit }) => (
    <Card className="p1">
      <Text size="headline">Login</Text>
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
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => {
              const { value } = e.target;
              return handleFieldChange('password', value);
            }}
          />
        </div>
        <Button onClick={handleSubmit}>Login</Button>
        {error && <p>{error}</p>}
      </form>
      <div className="mt2">
        <Anchor url="/auth/reset">Forgot Password?</Anchor>
      </div>
    </Card>
  )
);

export default AuthLogin;
