import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';

import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';

import cx from 'classnames';

class Modal extends PureComponent {
  componentDidUpdate(prevProps) {
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
    const { isVisible, variant, data, resetModal } = this.props;
    return RegistryLoader(
      { isVisible, variant, data, resetModal },
      'components.Modal',
      () => import('./presentation.js')
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
