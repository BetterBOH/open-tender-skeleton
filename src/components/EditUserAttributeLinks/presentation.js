import React from 'react';
import { ListOptionButton, Card } from 'components';

const EditUserAttributeLinks = React.memo(
  ({ goToDashboard, handleClickCheckoutAsGuest, localesContext }) => {
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
        <ListOptionButton
          icon="UserCircle"
          onClick={handleClickCheckoutAsGuest}
          text={localesContext.Language.t('checkout.contact.checkoutAsGuest')}
          label={localesContext.Language.t('checkout.contact.logout')}
          ariaLabel={localesContext.Language.t(
            'checkout.contact.checkoutAsGuest'
          )}
          anchorTitle={localesContext.Language.t(
            'checkout.contact.checkoutAsGuest'
          )}
        />
      </Card>
    );
  }
);

export default EditUserAttributeLinks;
