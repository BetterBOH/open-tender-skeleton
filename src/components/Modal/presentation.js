import React, { Component } from 'react';
import get from 'utils/get';

import { LineItemEditor } from 'components';

class Modal extends Component {
  renderModalInner = () => {
    const { variant, data } = this.props;

    switch (variant) {
      default:
        const lineItem = get(data, 'lineItem');
        return !!lineItem ? <LineItemEditor lineItem={lineItem} /> : null;
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
