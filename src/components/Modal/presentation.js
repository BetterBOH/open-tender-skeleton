import React from 'react';
import cx from 'classnames';
import FocusTrap from 'focus-trap-react';

const renderModalInner = (variant, data) => {
  switch (variant) {
    default:
      return null;
  }
};

const Modal = React.memo(({ modelIsActive, variant, data, resetModal }) => {
  if (!modelIsActive || !variant) return null;

  return (
    <FocusTrap
      active={modelIsActive}
      focusTrapOptions={{
        escapeDeactivates: false,
        returnFocusOnDeactivate: true
      }}
    >
      <div
        className={cx('Modal', 'fixed', 'opacity-0', 'events-none', 'hidden', {
          'Modal--active t0 r0 b0 l0 opacity-1 visible flex justify-center items-center z2': modelIsActive
        })}
      >
        <div className="z3">{renderModalInner(variant, data)}</div>
        <div
          className="Modal--overlay absolute vh100 col-12 bg-color-gray"
          onClick={resetModal}
        />
      </div>
    </FocusTrap>
  );
});

export default Modal;
