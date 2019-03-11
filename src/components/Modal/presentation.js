import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FocusTrap from 'focus-trap-react';
import cx from 'classnames';
import get from 'utils/get';

import { resetModal } from 'state/actions/ui/modalActions';

class Modal extends Component {
  renderModalInner = (variant, data) => {
    switch (variant) {
      default:
        return null;
    }
  };

  render() {
    const { modalIsActive, variant, data } = this.props;
    const resetModal = get(this, 'props.actions.resetModfal', f => f);
    if (!modalIsActive || !variant) return null;

    return (
      <FocusTrap
        active={modalIsActive}
        focusTrapOptions={{
          escapeDeactivates: false,
          returnFocusOnDeactivate: true
        }}
      >
        <div
          className={cx(
            'Modal',
            'fixed',
            'opacity-0',
            'events-none',
            'hidden',
            {
              'Modal--active t0 r0 b0 l0 opacity-1 visible flex justify-center items-center z2': modalIsActive
            }
          )}
        >
          <div className="z3">{this.renderModalInner(variant, data)}</div>
          <div
            className="Modal--overlay absolute vh100 col-12 bg-color-gray"
            onClick={resetModal}
          />
        </div>
      </FocusTrap>
    );
  }
}

const mapStateToProps = state => ({
  modalIsActive: get(state, 'modal.modalIsActive', false),
  variant: get(state, 'modal.variant'),
  data: get(state, 'modal.data')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ resetModal }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
