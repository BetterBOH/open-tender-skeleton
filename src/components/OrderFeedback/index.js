import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Status,
  createRating,
  fetchRating,
  updateRating
} from 'brandibble-redux';

import get from 'utils/get';
import { setModal, resetModal } from 'state/actions/ui/modalActions';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import ModalTypes from 'constants/ModalTypes';
import OrderModel from 'constants/Models/OrderModel';

class OrderFeedback extends Component {
  static propTypes = {
    order: OrderModel.propTypes
  };

  static defaultProps = {
    order: OrderModel.defaultProps
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
      const rating = this.findRatingForOrder();
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
    const ratingForOrder = this.findRatingForOrder();
    this.setState({ rating });

    if (ratingForOrder) {
      return actions.updateRating(openTenderRef, orderId, {
        rating: rating,
        comments: get(ratingForOrder, 'comments', '')
      });
    }

    return actions.createRating(openTenderRef, orderId, {
      rating: rating
    });
  };

  findRatingForOrder = () => {
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
    const { actions } = this.props;

    return get(actions, 'setModal')(ModalTypes.ORDER_FEEDBACK_COMMENT, {
      submitFeedback: this.handleLeaveComment
    });
  };

  render() {
    return RegistryLoader(
      {
        rating: this.state.rating,
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
)(OrderFeedback);
