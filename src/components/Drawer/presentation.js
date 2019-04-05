import React from 'react';
import cx from 'classnames';

import get from 'utils/get';
import { PaymentDrawer } from 'components';
import { drawerVariants } from 'state/actions/ui/drawerActions';
import DrawerTypes from 'constants/DrawerTypes';

const Drawer = React.memo(props => {
  const renderDrawerInner = (variant, data) => {
    switch (variant) {
      case DrawerTypes.SELECT_PAYMENT_TYPE:
        return <PaymentDrawer />;
      default:
        return null;
    }
  };

  const { drawerIsActive, variant, data, resetDrawer } = props;

  if (!drawerIsActive || !variant) return null;

  return (
    <div
      className={cx(
        'Drawer fixed t0 r0 b0 l0 flex justify-center items-end z2',
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
        onClick={resetDrawer}
      />
    </div>
  );
});

export default Drawer;
