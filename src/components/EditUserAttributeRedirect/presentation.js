import React from 'react';
import { ListOptionButton } from 'components';

const EditUserAttributeRedirect = React.memo(
  ({
    editAttributePath,
    handleClickCheckoutAsGuest,
    onClose,
    localesContext
  }) => {
    return (
      <div className="EditUserAttributeRedirect bg-color-white py2 pl1 md:p0">
        <ListOptionButton
          icon="Write"
          to={editAttributePath}
          onClick={onClose}
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

export default EditUserAttributeRedirect;
