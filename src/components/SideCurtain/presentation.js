import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import { TRANSITION_TIMING } from 'constants/Presentation';
import { MiniCart } from 'components';

class SideCurtain extends PureComponent {
  render() {
    const { sideCurtainIsActive, resetSideCurtain } = this.props;

    return (
      <CSSTransition
        in={sideCurtainIsActive}
        classNames={{
          enter: 'SideCurtain--enter',
          enterDone: 'SideCurtain--entered',
          exit: 'SideCurtain--exit',
          exitDone: 'SideCurtain--exited'
        }}
        timeout={TRANSITION_TIMING}
      >
        <div
          className="SideCurtain r0 b0 l0 fixed z4"
          aria-hidden={!sideCurtainIsActive}
        >
          <div className="SideCurtain__drawer relative bg-color-white z1 h100 w100 mlauto">
            <MiniCart
              miniCartIsActive={sideCurtainIsActive}
              handleClose={resetSideCurtain}
            />
          </div>
          <div
            onClick={resetSideCurtain}
            className="SideCurtain__overlay bg-color-black-wash absolute t0 r0 b0 l0"
          />
        </div>
      </CSSTransition>
    );
  }
}

export default SideCurtain;
