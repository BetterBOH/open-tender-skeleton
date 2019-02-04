import React from 'react';

import { Text, Button } from 'components';

const AccountButton = ({ className, icon, onClick, userIsAuthenticated }) => (
  <Button>
    <Text>{userIsAuthenticated ? 'Hugh' : 'Guest'}</Text>
  </Button>
);

export default AccountButton;
