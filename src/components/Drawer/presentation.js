import React from 'react';
import cx from 'classnames';

import {
  PaymentMethods,
  MenuNavigationLinks,
  MenuFilters,
  EditServiceTypeTime,
  EditUserAttributeRedirect
} from 'components';
import DrawerTypes from 'constants/DrawerTypes';
import { SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER } from 'constants/PaymentMethods';
import get from 'utils/get';

const Drawer = React.memo(props => {
  const { drawerIsActive, variant, data, actions } = props;

  if (!drawerIsActive || !variant) return null;

  const renderDrawerInner = () => {
    switch (variant) {
      case DrawerTypes.PAYMENT_METHODS:
        return (
          <PaymentMethods
            onClose={actions.resetDrawer}
            selectPaymentMethodVariant={
              get(data, 'selectPaymentMethodVariant')
                ? get(data, 'selectPaymentMethodVariant')
                : SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER
            }
          />
        );
      case DrawerTypes.EDIT_SERVICE_TYPE_TIME:
        return <EditServiceTypeTime onClose={actions.resetDrawer} />;
      case DrawerTypes.EDIT_USER_ATTRIBUTE_REDIRECT:
        return (
          <EditUserAttributeRedirect
            onClose={actions.resetDrawer}
            handleClickCheckoutAsGuest={get(data, 'handleClickCheckoutAsGuest')}
          />
        );
      case DrawerTypes.MENU_NAVIGATION:
        return (
          <MenuNavigationLinks onClose={actions.resetDrawer} data={data} />
        );
      case DrawerTypes.MENU_FILTER:
        return <MenuFilters onClose={actions.resetDrawer} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cx(
        'Drawer fixed t0 r0 b0 l0 flex justify-center items-end z5',
        {
          hidden: !drawerIsActive
        }
      )}
    >
      <div className="Drawer__inner bg-color-white z2 fixed col-12">
        {renderDrawerInner(variant, data)}
      </div>
      <div
        className="absolute vh100 col-12 bg-color-black-overlay"
        onClick={actions.resetDrawer}
      />
    </div>
  );
});

export default Drawer;
