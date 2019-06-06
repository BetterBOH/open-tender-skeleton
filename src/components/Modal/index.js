import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import isMobile from 'utils/isMobile';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';
import { resetModal } from 'state/actions/ui/modalActions';

import { KeyCodes } from 'constants/Accessibility';

class Modal extends PureComponent {
  static propTypes = {
    modalIsActive: PropTypes.bool,
    modalIsFrozen: PropTypes.bool,
    variant: PropTypes.string,
    data: PropTypes.object,
    actions: PropTypes.shape({
      resetModal: PropTypes.func
    })
  };

  static defaultProps = {
    modalIsActive: false,
    modalIsFrozen: false,
    variant: '',
    data: {},
    actions: {
      resetModal: f => f
    }
  };

  componentDidMount() {
    if (!isMobile()) {
      window.addEventListener('resize', this.deactivateModal);
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }

  componentDidUpdate(prevProps) {
    const modalWasActive = get(prevProps, 'modalIsActive');
    const modalIsActive = get(this, 'props.modalIsActive');

    if (!modalWasActive && modalIsActive) {
      freezeScroll();
    }

    if (modalWasActive && !modalIsActive) {
      unfreezeScroll();
    }
  }

  componentWillUnmount() {
    if (!isMobile()) {
      window.removeEventListener('resize', this.deactivateModal);
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  deactivateModal = () => {
    const { modalIsActive, actions, modalIsFrozen } = this.props;

    if (modalIsFrozen) return null;

    if (modalIsActive) actions.resetModal();
  };

  handleKeyDown = e => {
    if (e.keyCode !== KeyCodes.ESCAPE) return null;

    return this.deactivateModal();
  };

  render() {
    const { modalIsActive, modalIsFrozen, variant, data, actions } = this.props;

    return RegistryLoader(
      {
        modalIsActive,
        modalIsFrozen,
        variant,
        data,
        actions
      },
      'components.Modal',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  modalIsActive: get(state, 'modal.modalIsActive', false),
  modalIsFrozen: get(state, 'modal.modalIsFrozen', false),
  variant: get(state, 'modal.variant'),
  data: get(state, 'modal.data')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetModal
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
