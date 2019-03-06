import React from 'react';
import cx from 'classnames';
import FocusTrap from 'focus-trap-react';
import { Button } from 'components';

const renderModalInner = (variant, data) => {
  switch (variant) {
    default:
      return null;
  }
};

const Modal = React.memo(({ isVisible, variant, data, resetModal }) => {
  if (!isVisible || !variant) return null;
  return (
    <FocusTrap
      active={isVisible}
      focusTrapOptions={{
        escapeDeactivates: false,
        returnFocusOnDeactivate: true
      }}
    >
      <div
        className={cx('Modal', 'fixed', 'opacity-0', 'events-none', 'hidden', {
          visible: isVisible
        })}
      >
        <div className="modal-inner">{renderModalInner(variant, data)}</div>
        <div
          className="overlay absolute vh100 col-12 bg-color-gray"
          onClick={resetModal}
        />
      </div>
    </FocusTrap>
  );
});

export default Modal;
