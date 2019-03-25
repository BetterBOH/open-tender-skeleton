import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { setModal, resetModal } from 'state/actions/ui/modalActions';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';

class Modal extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      setModal: PropTypes.func,
      resetModal: PropTypes.func
    }),
    modalIsActive: PropTypes.bool,
    variant: PropTypes.string,
    data: PropTypes.object
  };

  static defaultProps = {
    actions: {
      setModal: f => f,
      resetModal: f => f
    },
    modalIsActive: false,
    variant: '',
    data: {}
  };

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

  render() {
    const { modalIsActive, variant, data, actions, currentItem } = this.props;

    return RegistryLoader(
      { modalIsActive, variant, data, actions, currentItem },
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
  actions: bindActionCreators({ setModal, resetModal }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Modal));
