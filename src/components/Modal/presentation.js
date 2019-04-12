import React, { Component } from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { getConfig } from 'lib/MutableConfig';

import ModalTypes from 'constants/ModalTypes';
import ConfigKeys from 'constants/ConfigKeys';

import { LineItemEditor, MenuNavigation } from 'components';

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
        return <MenuNavigation onClose={actions.resetModal} data={data} />;
      default:
        return null;
    }
  };

  render() {
    const { modalIsActive, variant, actions } = this.props;

    if (!modalIsActive || !variant) return null;

    return (
      <div
        className={cx('Modal fixed t0 r0 b0 l0 flex z2', {
          hidden: !modalIsActive
        })}
      >
        <div className="Modal__inner col-12">{this.renderModalInner()}</div>
        <div
          className="Modal__overlay absolute vh100 col-12 bg-color-white-overlay"
          onClick={actions.resetModal}
        />
      </div>
    );
  }
}

export default Modal;
