import React, { Fragment } from 'react';
import get from 'utils/get';

import { Card, Text, Icon } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const PastOrderDetails = React.memo(props => {
  const { order, Language } = props;

  const locationName = get(order, 'location_name');

  return (
    <Fragment>
      <div className="mb1">
        <Text size="cta" className="bold">
          {Language.t('order.details')}
        </Text>
      </div>
      <Card className="PastOrderDetails">
        {!!locationName ? (
          <div className="PastOrderDetails__row flex justify-between items-center p1">
            <Text size="extrasmall" className="text-bold color-gray">
              {Language.t('order.location')}
            </Text>
            <div className="flex bg-color-gray-light radius-sm p_5">
              <div className="PastOrderDetails__icon mr_5">
                <Icon icon="Marker" fill={gray} />
              </div>
              <Text size="extrasmall" className="color-gray-dark">
                {locationName}
              </Text>
            </div>
          </div>
        ) : null}
      </Card>
    </Fragment>
  );
});

export default PastOrderDetails;
