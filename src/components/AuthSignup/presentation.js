import React from 'react';

import { Card, Text, Button } from 'components';

const AuthSignup = React.memo(props => {
  const { email, error, handleCheckEmailChange, handleCheckEmailClick } = props;

  return (
    <Card className="p1">
      <Text size="headline">Login</Text>
      <form>
        <input type="email" value={email} onChange={handleCheckEmailChange} />
        <Button onClick={handleCheckEmailClick}>Check Email</Button>
        {error && <p>{error}</p>}
      </form>
    </Card>
  );
});

export default AuthSignup;
