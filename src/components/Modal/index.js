import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';
import { resetModal } from 'state/actions/ui/modalActions';

class Modal extends PureComponent {
  static propTypes = {
    modalIsActive: PropTypes.bool,
    variant: PropTypes.string,
    data: PropTypes.object,
    actions: PropTypes.shape({
      resetModal: PropTypes.func
    })
  };

  static defaultProps = {
    modalIsActive: false,
    variant: '',
    data: {},
    actions: {
      resetModal: f => f
    }
  };

  componentWillMount() {
    window.addEventListener('resize', this.deactivateModal);
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
    window.removeEventListener('resize', this.deactivateModal);
  }

  deactivateModal = () => {
    const { modalIsActive, actions } = this.props;
    if (modalIsActive) actions.resetModal();
  };

  render() {
    const { modalIsActive, variant, data, actions } = this.props;

    return RegistryLoader(
      { modalIsActive, variant, data, actions },
      'components.Modal',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  modalIsActive: get(state, 'modal.modalIsActive', false),
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
