import React, { Fragment } from 'react';
import get from 'utils/get';

import { Card, Text, Icon } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const PastOrderDetails = React.memo(props => {
  const { order, Language } = props;

  const pastOrderDetailsRow = (label, icon, value) => (
    <div className="PastOrderDetails__row flex justify-between items-center p1">
      <Text size="extrasmall" className="text-bold color-gray">
        {label}
      </Text>
      <div className="flex bg-color-gray-light radius-sm p_5">
        <div className="PastOrderDetails__icon mr_5">
          <Icon icon={icon} fill={gray} />
        </div>
        <Text size="extrasmall" className="color-gray-dark">
          {value}
        </Text>
      </div>
    </div>
  );

  const locationName = get(order, 'location_name');

  return (
    <Fragment>
      <div className="mb1">
        <Text size="cta" className="bold">
          {Language.t('order.details')}
        </Text>
      </div>
      <Card className="PastOrderDetails">
        {pastOrderDetailsRow(
          Language.t('order.service'),
          'Bag',
          get(order, 'order_type_str')
        )}
        {!!locationName
          ? pastOrderDetailsRow(
              Language.t('order.location'),
              'Marker',
              locationName
            )
          : null}
      </Card>
    </Fragment>
  );
});

export default PastOrderDetails;
