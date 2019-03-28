import React, { Component } from 'react';

import ModalTypes from 'constants/ModalTypes';
import { LineItemEditor } from 'components';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

class Modal extends Component {
  renderModalInner = () => {
    const { variant, data, actions } = this.props;

    switch (variant) {
      case ModalTypes.LINE_ITEM_EDITOR:
        const currentItem = get(data, 'currentItem');
        return !!currentItem ? (
          <LineItemEditor onClose={actions.closeLineItemEditor} />
        ) : null;
      default:
        return null;
    }
  };

  render() {
    const { modalIsActive } = this.props;
    if (!modalIsActive) return null;

    return (
      <div className="Modal fixed t0 r0 b0 l0 flex justify-center items-center z2">
        <div className="Modal__inner">{this.renderModalInner()}</div>
      </div>
    );
  }
}

export default Modal;
