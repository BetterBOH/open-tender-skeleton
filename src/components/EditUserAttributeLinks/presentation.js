import React from 'react';
import { ListOptionButton, Card } from 'components';

const EditUserAttributeLinks = React.memo(
  ({ goToDashboard, localesContext }) => {
    return (
      <Card className="EditUserAttributeLinks py2 px1 md:p0">
        <ListOptionButton
          icon="Write"
          onClick={goToDashboard}
          text={localesContext.Language.t('checkout.contact.editInDashboard')}
          ariaLabel={localesContext.Language.t(
            'checkout.contact.editInDashboard'
          )}
          anchorTitle={localesContext.Language.t(
            'checkout.contact.editInDashboard'
          )}
        />
      </Card>
    );
  }
);

export default EditUserAttributeLinks;
