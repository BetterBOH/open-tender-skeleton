import React from 'react';
import { Text } from 'components';

const EditServiceTypeTime = React.memo(({ localesContext }) => {
  const { Language } = localesContext;

  return (
    <div className="col-12">
      <Text>{Language.t('pastOrders.inTotal')}</Text>
    </div>
  );
});

export default EditServiceTypeTime;
