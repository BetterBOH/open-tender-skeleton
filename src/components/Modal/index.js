import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';

import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';
// import FocusTrap from 'focus-trap-react';

// import {
//   EDIT_ATTRIBUTE_MODAL,
//   EDIT_PASSWORD_MODAL,
//   ADD_PAYMENT_METHOD_MODAL,
//   CONFIRMATION_MODAL,
//   CREATE_ORDER_MODAL,
//   INVALID_ITEMS_MODAL,
//   CATERING_CONFIGURATION_MODAL,
//   LOCATION_CLOSED_MODAL
// } from 'constants/ModalVariants';
//
// import {
//   EditAttributeModal,
//   EditPasswordModal,
//   AddPaymentMethodModal,
//   ConfirmationModal,
//   CreateOrderModal,
//   InvalidItemsModal,
//   CateringConfigurationModal,
//   LocationClosedModal
// } from 'components/modals';

// import Vars from 'constants/Vars';

import cx from 'classnames';
// import v from 'vudu';
// import { styles as s, colors, breakpoints } from 'styles';

// const { modalInnerMaxWidth, modalInnerMaxHeight } = Vars;

// const classes = v({
//   modal: {
//     position: 'fixed',
//     opacity: 0,
//     pointerEvents: 'none',
//     visibility: 'hidden'
//   },
//   visible: {
//     '@composes': [s.t0, s.r0, s.b0, s.l0, s.transitionOpacity, s.zModal],
//     position: 'fixed',
//     opacity: 1,
//     pointerEvents: 'auto',
//     visibility: 'visible',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   modalInner: {
//     '@composes': [s.col10, s.relative, s.bgWhite, s.zModal, s.p7],
//     maxWidth: `${modalInnerMaxWidth}px`,
//     maxHeight: `${modalInnerMaxHeight}px`
//   },
//   mobileFullCover: {
//     '@composes': [
//       s.min100vw,
//       s.fixed,
//       s.l0,
//       s.t0,
//       s.b0,
//       s.r0,
//       s.flex,
//       s.flexColumn,
//       s.p0
//     ],
//     minHeight: '100%',
//     [breakpoints.sm]: {
//       '@composes': [s.relative],
//       minWidth: 'auto',
//       minHeight: 'auto'
//     }
//   },
//   overlay: {
//     '@composes': [s.absolute, s.col12, s.height100],
//     backgroundColor: colors.gray,
//     opacity: 0.75
//   }
// });

class Modal extends PureComponent {
  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps);
    const wasVisible = get(prevProps, 'isVisible');
    const isVisible = get(this, 'props.isVisible');

    if (!wasVisible && isVisible) {
      freezeScroll();
    }

    if (wasVisible && !isVisible) {
      unfreezeScroll();
    }
  }
  render() {
    const { items } = this.props;
    return RegistryLoader({ items }, 'components.Modal', () =>
      import('./presentation.js')
    );
  }
}

Modal.defaultProps = {
  isVisible: false,
  variant: '',
  data: {},
  resetModal: f => f
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  variant: PropTypes.string,
  data: PropTypes.object,
  resetModal: PropTypes.func
};

export default Modal;
