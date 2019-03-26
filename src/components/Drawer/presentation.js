import React, { Component } from 'react';
import FocusTrap from 'focus-trap-react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import get from 'utils/get';
import { SelectPaymentType } from 'components';

class Drawer extends Component {
  static propTypes = {
    drawerIsActive: PropTypes.bool,
    variant: PropTypes.string,
    data: PropTypes.object,
    resetDrawer: PropTypes.func
  };

  static defaultProps = {
    drawerIsActive: false,
    variant: '',
    data: {},
    resetDrawer: f => f
  };

  renderDrawerInner = (variant, data) => {
    switch (variant) {
      case 'SELECT_PAYMENT_TYPE':
        return <SelectPaymentType />;
      default:
        return null;
    }
  };

  render() {
    const { drawerIsActive, variant, data } = this.props;
    const resetDrawer = get(this, 'props.resetDrawer', f => f);
    if (!drawerIsActive || !variant) return null;

    return (
      <div
        className={cx('Drawer', 'fixed', 'opacity-0', 'events-none', 'hidden', {
          'Drawer--active t0 r0 b0 l0 opacity-1 visible flex justify-center items-end z2': drawerIsActive
        })}
      >
        <div className="z2">{this.renderDrawerInner(variant, data)}</div>
        <div
          className="Drawer--overlay absolute vh100 col-12 bg-color-gray"
          onClick={resetDrawer}
        />
      </div>
    );
  }
}

export default Drawer;
