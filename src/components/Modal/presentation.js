import React, { Component } from 'react';
import get from 'utils/get';

import { Button, MenuItemBuilder } from 'components';

class Modal extends Component {
  renderModalInner = () => {
    const { variant, data } = this.props;

    switch (variant) {
      default:
        const lineItem = get(data, 'lineItem');
        return !!lineItem ? <MenuItemBuilder /> : null;
    }
  };

  render() {
    const { modalIsActive, actions } = this.props;
    if (!modalIsActive) return null;

    return (
      <div className="Modal fixed t0 r0 b0 l0 flex justify-center items-center z2">
        <div className="Modal__inner">{this.renderModalInner()}</div>
        <Button
          className="Modal__overlay absolute vh100 col-12 bg-color-gray"
          onClick={actions.resetModal}
        />
      </div>
    );
  }
}

export default Modal;
