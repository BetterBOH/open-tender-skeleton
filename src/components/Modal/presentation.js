import React, { Component } from 'react';
import get from 'utils/get';

import ModalTypes from 'constants/ModalTypes';

import {
  LineItemEditor,
  MenuNavigationLinks,
  MenuFilters,
  InvalidItemsInCart
} from 'components';

class Modal extends Component {
  // onClose = () => {
  //   const { variant, actions, orderRef, currentLineItem } = this.props;
  //   switch (variant) {
  //     case ModalTypes.LINE_ITEM_EDITOR: {
  //       return () => {
  //         actions.removeLineItem(orderRef, currentLineItem);
  //         actions.resetModal();
  //         get(getConfig(ConfigKeys.STATE), 'history').goBack();
  //       };
  //     }
  //     default:
  //       return actions.resetModal;
  //   }
  // };

  // onConfirm = () => {
  //   const { variant, actions } = this.props;

  //   switch (variant) {
  //     case ModalTypes.LINE_ITEM_EDITOR:
  //       return () => {
  //         actions.resetModal();
  //         get(getConfig(ConfigKeys.STATE), 'history').goBack();
  //       };

  //     default:
  //       return actions.resetModal;
  //   }
  // };

  renderModalInner = () => {
    const { variant, data, actions, modalIsFrozen } = this.props;

    switch (variant) {
      case ModalTypes.LINE_ITEM_EDITOR:
        return <LineItemEditor data={data} />;
      case ModalTypes.MENU_NAVIGATION:
        return <MenuNavigationLinks onClose={actions.resetModal} data={data} />;
      case ModalTypes.MENU_FILTER:
        return <MenuFilters onClose={actions.resetModal} />;
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
    const { modalIsActive, modalIsFrozen, actions } = this.props;

    if (!modalIsActive) return null;

    return (
      <div className="Modal fixed t0 r0 b0 l0 flex z5">
        <div className="Modal__inner col-12 relative">
          <div
            className="Modal__overlay absolute vh100 col-12 bg-color-black-wash z1"
            onClick={!modalIsFrozen ? actions.resetModal : f => f}
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
