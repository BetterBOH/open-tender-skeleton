import React from 'react';

import { Button, Icon } from 'components';

const CartButton = (icon, onClick) => (
  <Button onClick={onClick}>
    <Icon icon={icon} />
  </Button>
);

export default CartButton;
