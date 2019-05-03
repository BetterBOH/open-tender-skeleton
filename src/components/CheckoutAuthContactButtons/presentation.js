import React from 'react';
import { ListOptionButton } from 'components';

const CheckoutAuthContactButtons = React.memo(
  ({ editAttributePath, handleClickCheckoutAsGuest, localesContext }) => {
    return (
      <div className="CheckoutAuthContactButtons">
        <ListOptionButton
          icon="Write"
          to={editAttributePath}
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
      </div>
    );
  }
);

export default CheckoutAuthContactButtons;
