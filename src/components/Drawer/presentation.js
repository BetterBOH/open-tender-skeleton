import React from 'react';
import cx from 'classnames';

import { PaymentMethods, MenuNavigationLinks, MenuFilters } from 'components';
import DrawerTypes from 'constants/DrawerTypes';

const Drawer = React.memo(props => {
  const { drawerIsActive, variant, data, actions } = props;

  if (!drawerIsActive || !variant) return null;

  const renderDrawerInner = () => {
    switch (variant) {
      case DrawerTypes.PAYMENT_METHODS:
        return <PaymentMethods />;
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
      <div className="Drawer__inner z2 fixed col-12">
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
