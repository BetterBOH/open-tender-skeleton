import React, { Component } from 'react';

import ModalTypes from 'constants/ModalTypes';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

import { LineItemEditor } from 'components';

class Modal extends Component {
  renderModalInner = () => {
    const { variant } = this.props;

    switch (variant) {
      case ModalTypes.LINE_ITEM_EDITOR:
        return (
          <LineItemEditor
            onClose={get(getConfig(ConfigKeys.STATE), 'history').goBack}
          />
        );
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
