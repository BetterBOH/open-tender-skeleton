import React from 'react';
import get from 'utils/get';
import cx from 'classnames';
import SideCurtainVariants from 'constants/SideCurtainVariants';
import { MiniCart } from '../index';

const { MINI_CART } = SideCurtainVariants;

const SideCurtain = React.memo(
  ({ sideCurtainIsActive, variant, data, resetSideCurtain, children }) => {
    const renderSideCurtainInner = () => {
      switch (variant) {
        case MINI_CART:
          return <MiniCart handleClose={resetSideCurtain} />;
        default:
          return null;
      }
    };

    return (
      <div
        className={cx('SideCurtain r0 b0 l0 fixed z2 events-none', {
          'SideCurtain--isActive events-all': sideCurtainIsActive
        })}
      >
        <div
          className={cx(
            'SideCurtain__drawer relative bg-color-white z1 h100 w100 mlauto',
            {
              'SideCurtain__drawer--isActive shadow-md': sideCurtainIsActive
            }
          )}
        >
          {renderSideCurtainInner()}
        </div>
        <div
          onClick={resetSideCurtain}
          className={cx('SideCurtain__overlay absolute t0 r0 b0 l0 opacity-0', {
            'SideCurtain__overlay--isActive opacity-1 bg-color-white-overlay': sideCurtainIsActive
          })}
        />
      </div>
    );
  }
);

export default SideCurtain;