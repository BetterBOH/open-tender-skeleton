import React from 'react';

import { Card, Text, Button } from 'components';

const AuthEmailCheck = React.memo(props => {
  const { email, handleCheckEmailChange, handleCheckEmailClick } = props;

  return (
    <Card className="p1">
      <Text size="headline">Login</Text>
      <form>
        <input type="email" value={email} onChange={handleCheckEmailChange} />
        <Button onClick={handleCheckEmailClick}>Check Email</Button>
      </form>
    </Card>
  );
});

export default AuthEmailCheck;
