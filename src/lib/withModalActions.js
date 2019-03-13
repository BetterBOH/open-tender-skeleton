import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setModal, resetModal } from 'state/actions/ui/modalActions';

import get from 'utils/get';
import { freezeScroll, unfreezeScroll } from 'utils/manageScrollingElement';

const withModalActions = WrappedComponent => {
  class WithModalActions extends Component {
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
      return <WrappedComponent {...this.props} />;
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

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithModalActions);
};

withModalActions.propTypes = {
  actions: PropTypes.shape({
    setModal: PropTypes.func,
    resetModal: PropTypes.func
  }),
  modalIsActive: PropTypes.bool,
  variant: PropTypes.string,
  data: PropTypes.object
};

withModalActions.defaultProps = {
  actions: {
    setModal: f => f,
    resetModal: f => f
  },
  modalIsActive: false,
  variant: '',
  data: {}
};

export default withModalActions;
