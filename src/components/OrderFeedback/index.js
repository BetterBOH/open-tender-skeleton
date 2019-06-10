import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withDrawer from 'lib/withDrawer';
import get from 'utils/get';
import isMobile from 'utils/isMobile';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Status,
  createRating,
  fetchRating,
  updateRating
} from 'brandibble-redux';

import { setModal, resetModal } from 'state/actions/ui/modalActions';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';

import ModalTypes from 'constants/ModalTypes';
import DrawerTypes from 'constants/DrawerTypes';
import OrderModel from 'constants/Models/OrderModel';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';

class OrderFeedback extends Component {
  static propTypes = {
    openTenderRef: OpenTenderRefModel.propTypes,
    order: OrderModel.propTypes,
    ratings: PropTypes.objectOf(
      PropTypes.shape({
        comments: PropTypes.string,
        rating: PropTypes.number,
        receipt_id: PropTypes.number
      })
    ),
    createRatingStatus: PropTypes.string,
    updateRatingStatus: PropTypes.string,
    fetchRatingStatus: PropTypes.string,
    createRatingError: PropTypes.string,
    updateRatingError: PropTypes.string,
    actions: PropTypes.shape({
      fetchRating: PropTypes.func,
      createRating: PropTypes.func,
      updateRating: PropTypes.func,
      setModal: PropTypes.func,
      resetModal: PropTypes.func,
      createSystemNotification: PropTypes.func
    })
  };

  static defaultProps = {
    openTenderRef: OpenTenderRefModel.defaultProps,
    order: OrderModel.defaultProps,
    ratings: null,
    createRatingStatus: Status.IDLE,
    updateRatingStatus: Status.IDLE,
    fetchRatingStatus: Status.IDLE,
    createRatingError: null,
    updateRatingError: null,
    actions: PropTypes.shape({
      fetchRating: f => f,
      createRating: f => f,
      updateRating: f => f,
      setModal: f => f,
      resetModal: f => f,
      createSystemNotification: f => f
    })
  };

  state = {
    rating: null
  };

  componentDidMount() {
    this.handleFetchRating();
  }

  componentDidUpdate(prevProps) {
    const createRatingFulfilled =
      get(prevProps, 'createRatingStatus') === Status.PENDING &&
      get(this, 'props.createRatingStatus') === Status.FULFILLED;
    const createRatingRejected =
      get(prevProps, 'createRatingStatus') === Status.PENDING &&
      get(this, 'props.createRatingStatus') === Status.REJECTED;
    const updateRatingFulfilled =
      get(prevProps, 'updateRatingStatus') === Status.PENDING &&
      get(this, 'props.updateRatingStatus') === Status.FULFILLED;
    const updateRatingRejected =
      get(prevProps, 'updateRatingStatus') === Status.PENDING &&
      get(this, 'props.updateRatingStatus') === Status.REJECTED;
    const fetchRatingFulfilled =
      get(prevProps, 'fetchRatingStatus') === Status.PENDING &&
      get(this, 'props.fetchRatingStatus') === Status.FULFILLED;

    if (createRatingFulfilled || updateRatingFulfilled) {
      this.handleFetchRating();
    }

    if (createRatingRejected) {
      this.handleFetchRating();
      const createRatingError = get(this, 'props.createRatingError[0].title');
      return this.props.actions.createSystemNotification({
        message: createRatingError
      });
    }

    if (updateRatingRejected) {
      this.handleFetchRating();
      const updateRatingError = get(this, 'props.updateRatingError[0].title');
      return this.props.actions.createSystemNotification({
        message: updateRatingError
      });
    }

    if (fetchRatingFulfilled) {
      const rating = this.findFeedbackForOrder();

      return this.setState({ rating: get(rating, 'rating', null) });
    }
  }

  handleFetchRating = () => {
    const { order, openTenderRef, actions } = this.props;
    const orderId = get(order, 'orders_id');

    return actions.fetchRating(openTenderRef, orderId);
  };

  handleSetRating = rating => {
    const { order, openTenderRef, actions } = this.props;
    const orderId = get(order, 'orders_id');
    const feedbackForOrder = this.findFeedbackForOrder();
    this.setState({ rating });

    if (feedbackForOrder) {
      return actions.updateRating(openTenderRef, orderId, {
        rating: rating,
        comments: get(feedbackForOrder, 'comments', '')
      });
    }

    return actions.createRating(openTenderRef, orderId, {
      rating: rating
    });
  };

  findFeedbackForOrder = () => {
    const { ratings, order } = this.props;
    const orderId = get(order, 'orders_id');

    return get(ratings, `${orderId}`) ? ratings[orderId] : null;
  };

  handleLeaveComment = comment => {
    const { order, openTenderRef, actions } = this.props;
    const orderId = get(order, 'orders_id');

    return actions.updateRating(openTenderRef, orderId, {
      rating: this.state.rating,
      comments: comment
    });
  };

  handleClickLeaveComment = () => {
    const { actions, _withDrawerActions } = this.props;
    const feedbackForOrder = this.findFeedbackForOrder();

    if (isMobile()) {
      return get(_withDrawerActions, 'setDrawer')(
        DrawerTypes.ORDER_FEEDBACK_COMMENT,
        {
          submitFeedback: this.handleLeaveComment,
          comment: get(feedbackForOrder, 'comments', '')
        }
      );
    }

    return get(actions, 'setModal')(ModalTypes.ORDER_FEEDBACK_COMMENT, {
      submitFeedback: this.handleLeaveComment,
      comment: get(feedbackForOrder, 'comments', '')
    });
  };

  render() {
    const { ratings, order } = this.props;
    const orderId = get(order, 'orders_id');

    return RegistryLoader(
      {
        rating: this.state.rating,
        comment: get(ratings, `${orderId}.comments`, ''),
        handleClickLeaveComment: this.handleClickLeaveComment,
        handleSetRating: this.handleSetRating
      },
      'components.OrderFeedback',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  ratings: get(state, 'openTender.session.ratings'),
  createRatingStatus: get(state, 'openTender.status.createRating'),
  updateRatingStatus: get(state, 'openTender.status.updateRating'),
  fetchRatingStatus: get(state, 'openTender.status.fetchRating'),
  createRatingError: get(state, 'openTender.error.createRating'),
  updateRatingError: get(state, 'openTender.error.updateRating')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchRating,
      createRating,
      updateRating,
      setModal,
      resetModal,
      createSystemNotification
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withDrawer(OrderFeedback));
