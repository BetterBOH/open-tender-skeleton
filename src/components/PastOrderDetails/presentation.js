import React, { Fragment } from 'react';
import { Text, DetailsCard } from 'components';

const PastOrderDetails = React.memo(
  ({ formattedOrderDetails, localesContext }) => {
    return (
      <Fragment>
        <div className="px1 mb_5">
          <Text size="cta" className="bold">
            {localesContext.Language.t('order.details')}
          </Text>
        </div>
        <DetailsCard details={formattedOrderDetails} />
      </Fragment>
    );
  }
);

export default PastOrderDetails;
