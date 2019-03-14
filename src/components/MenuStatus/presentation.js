import React from 'react';
import get from 'utils/get';

import { Text } from 'components';

const MenuStatus = React.memo(props => {
  const { status } = props;

  if (!status || !status.length) return null;

  return (
    <div className="MenuStatus shadow-md fixed bg-color-white p2 m2 r0 b0 l0">
      <Text>{status}</Text>
    </div>
  );
});

export default MenuStatus;
