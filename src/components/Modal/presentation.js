import React, { Component } from 'react';
import get from 'utils/get';
import { getConfig } from 'lib/MutableConfig';

import ModalTypes from 'constants/ModalTypes';
import ConfigKeys from 'constants/ConfigKeys';

import {
  LineItemEditor,
  MenuNavigationLinks,
  MenuFilters,
  InvalidItemsInCart
} from 'components';

class Modal extends Component {
  onClose = () => {
    const { variant, actions } = this.props;
    switch (variant) {
      case ModalTypes.LINE_ITEM_EDITOR:
        return get(getConfig(ConfigKeys.STATE), 'history').goBack;
      default:
        return actions.resetModal;
    }
  };

  renderModalInner = () => {
    const { variant, data, modalIsFrozen } = this.props;

    const onCloseFn = this.onClose();

    switch (variant) {
      case ModalTypes.LINE_ITEM_EDITOR:
        return <LineItemEditor onClose={onCloseFn} />;
      case ModalTypes.MENU_NAVIGATION:
        return <MenuNavigationLinks onClose={onCloseFn} data={data} />;
      case ModalTypes.MENU_FILTER:
        return <MenuFilters onClose={onCloseFn} />;
      case ModalTypes.INVALID_ITEMS_IN_CART:
        return (
          <InvalidItemsInCart
            showCancelButton={!modalIsFrozen}
            error={get(data, 'error', [])}
            handleAcceptClick={get(data, 'handleAcceptClick', f => f)}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { modalIsActive, modalIsFrozen } = this.props;

    if (!modalIsActive) return null;

    const onCloseFn = this.onClose();

    return (
      <div className="Modal fixed t0 r0 b0 l0 flex z5">
        <div className="Modal__inner col-12 relative">
          <div
            className="Modal__overlay absolute vh100 col-12 bg-color-black-wash z1"
            onClick={!modalIsFrozen ? onCloseFn : f => f}
          />
          <div className="Modal__content relative z2">
            {this.renderModalInner()}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
