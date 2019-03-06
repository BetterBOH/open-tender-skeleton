import React from 'react';
// import FocusTrap from 'focus-trap-react';

const Modal = React.memo(({ items }) => {
  console.log('hiiiii');
  // if (!items.length) return null;
  return (
    <div className="Modal visible">
      <h1 className="modalInner">hello world</h1>
    </div>
  );
  console.log('hi');
  return <h1>HELLO WORLD</h1>;
  // const isVisible = get(this, 'props.isVisible');
  //
  // return (
  //   <FocusTrap
  //     active={isVisible}
  //     focusTrapOptions={{
  //       escapeDeactivates: false,
  //       returnFocusOnDeactivate: true
  //     }}
  //   >
  //     <div className={'cx(classes.modal, { [classes.visible]: isVisible })'}>
  //       <div
  //         className={`cx(classes.modalInner, {
  //           [classes.mobileFullCover]: this.isMobileFullCover()
  //         })`}
  //       >
  //         {this.renderModalInner()}
  //       </div>
  //       <div className={classes.overlay} onClick={this.handleResetModal} />
  //     </div>
  //   </FocusTrap>
  // );
});

export default Modal;
