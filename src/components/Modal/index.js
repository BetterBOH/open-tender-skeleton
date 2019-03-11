import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import cx from 'classnames';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';

class Modal extends PureComponent {
  static propTypes = {
    modelIsActive: PropTypes.bool,
    variant: PropTypes.string,
    data: PropTypes.object,
    resetModal: PropTypes.func
  };

  static defaultProps = {
    modelIsActive: false,
    variant: '',
    data: {},
    resetModal: f => f
  };

  componentDidUpdate(prevProps) {
    const modalWasActive = get(prevProps, 'modelIsActive');
    const modalIsActive = get(this, 'props.modelIsActive');

    if (!modalWasActive && modalIsActive) {
      freezeScroll();
    }

    if (modalWasActive && !modalIsActive) {
      unfreezeScroll();
    }
  }

  render() {
    const { modelIsActive, variant, data, resetModal } = this.props;

    return RegistryLoader(
      { modelIsActive, variant, data, resetModal },
      'components.Modal',
      () => import('./presentation.js')
    );
  }
}

export default Modal;
