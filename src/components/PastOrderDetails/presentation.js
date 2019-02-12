import React from 'react';
import get from 'utils/get';

import { Text } from 'components';

const PastOrderDetails = React.memo(props => {
  const { order, Language } = props;

  const locationName = get(order, 'location_name');

  return (
    <div>
      {!!locationName ? (
        <div>
          <Text>{Language.t('order.location')}</Text>
          <Text>{locationName}</Text>
        </div>
      ) : null}
    </div>
  );
});

export default PastOrderDetails;
