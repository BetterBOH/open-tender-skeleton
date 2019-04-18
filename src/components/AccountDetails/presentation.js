import React, { Fragment } from 'react';
import { Text, DetailsCard } from 'components';

const AccountDetails = React.memo(
  ({ formattedAccountDetails, localesContext }) => {
    return (
      <Fragment>
        <div className="px1 mb_5">
          <Text size="cta" className="bold">
            {localesContext.Language.t('account.details')}
          </Text>
        </div>
        <div className="px1 mb1_5">
          <Text size="description" className="color-gray-dark">
            {localesContext.Language.t('account.instructions')}
          </Text>
        </div>
        <DetailsCard details={formattedAccountDetails} />
      </Fragment>
    );
  }
);

export default AccountDetails;
