import React, { Component } from 'react';
import get from 'utils/get';
import { getConfig } from 'lib/MutableConfig';

import ModalTypes from 'constants/ModalTypes';
import ConfigKeys from 'constants/ConfigKeys';

import { LineItemEditor, MenuNavigationLinks, MenuFilters, InvalidItemsInCart } from 'components';

class Modal extends Component {
  renderModalInner = () => {
    const { variant, data, actions } = this.props;

    switch (variant) {
      case ModalTypes.LINE_ITEM_EDITOR:
        return (
          <LineItemEditor
            onClose={get(getConfig(ConfigKeys.STATE), 'history').goBack}
          />
        );
      case ModalTypes.MENU_NAVIGATION:
        return <MenuNavigationLinks onClose={actions.resetModal} data={data} />;
      case ModalTypes.MENU_FILTER:
        return <MenuFilters onClose={actions.resetModal} />;
      case ModalTypes.INVALID_ITEMS_IN_CART:
        return (
          <InvalidItemsInCart
            errors={get(data, 'errors', [])}
            handleAcceptClick={get(data, 'handleAcceptClick', f => f)}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { modalIsActive, actions } = this.props;

    if (!modalIsActive) return null;

    return (
      <div className="Modal fixed t0 r0 b0 l0 flex z5">
        <div className="Modal__inner col-12 z1">{this.renderModalInner()}</div>
        <div
          className="Modal__overlay absolute vh100 col-12 bg-color-white-overlay"
          onClick={actions.resetModal}
        />
      </div>
    );
  }
}

export default Modal;
