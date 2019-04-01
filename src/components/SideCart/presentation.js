import React from 'react';
import get from 'utils/get';

import cx from 'classnames';

const SideCart = React.memo(({ sideCartIsActive, resetSideCart }) => {
  return (
    <div
      className={cx('SideCart r0 b0 l0 fixed z2 events-none', {
        'events-all': sideCartIsActive
      })}
    >
      <div
        className={cx(
          'SideCart__drawer relative bg-color-white z1 h100 w100 mlauto',
          {
            'SideCart__drawer--isActive shadow-md': sideCartIsActive
          }
        )}
      >
        SIDE CART CONTENT
      </div>
      <div
        onClick={resetSideCart}
        className={cx('SideCart__overlay absolute t0 r0 b0 l0 opacity-0', {
          'SideCart__overlay--isActive opacity-1 bg-color-white-overlay': sideCartIsActive
        })}
      />
    </div>
  );
});

export default SideCart;
