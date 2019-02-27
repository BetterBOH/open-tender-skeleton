import React from 'react';
import get from 'utils/get';

import { Text } from 'components';

const PastOrdersIndex = React.memo(props => {
  const { orders, localesContext } = props;
  const { Language } = localesContext;

  return <Text>past order index</Text>;
});

export default PastOrdersIndex;
