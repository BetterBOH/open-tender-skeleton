import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createRating, fetchRating, updateRating } from 'brandibble-redux';
import { PENDING, FULFILLED, REJECTED } from 'constants/Status';
import get from 'utils/get';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import FlashVariants from 'constants/FlashVariants';
const { ERROR } = FlashVariants;

class OrderRating extends Component {
  static propTypes = {
    orderId: PropTypes.number // TODO: use model
  };

  static defaultProps = {
    orderId: null // TODO: use model
  };

  state = {
    rating: null
  };

  componentDidMount() {
    this.handleFetchRating();
  }

  componentDidUpdate(prevProps) {
    const createRatingFulfilled =
      get(prevProps, 'createRatingStatus') === PENDING &&
      get(this, 'props.createRatingStatus') === FULFILLED;
    const createRatingRejected =
      get(prevProps, 'createRatingStatus') === PENDING &&
      get(this, 'props.createRatingStatus') === REJECTED;
    const updateRatingFulfilled =
      get(prevProps, 'updateRatingStatus') === PENDING &&
      get(this, 'props.updateRatingStatus') === FULFILLED;
    const updateRatingRejected =
      get(prevProps, 'updateRatingStatus') === PENDING &&
      get(this, 'props.updateRatingStatus') === REJECTED;
    const fetchRatingFulfilled =
      get(prevProps, 'fetchRatingStatus') === PENDING &&
      get(this, 'props.fetchRatingStatus') === FULFILLED;

    if (createRatingFulfilled || updateRatingFulfilled) {
      this.handleFetchRating();
    }

    if (createRatingRejected) {
      this.handleFetchRating();
      const createRatingError = get(this, 'props.createRatingError[0].title');
      return this.props.actions.createSystemNotification({
        message: createRatingError,
        variant: ERROR
      });
    }

    if (updateRatingRejected) {
      this.handleFetchRating();
      const updateRatingError = get(this, 'props.updateRatingError[0].title');
      return this.props.actions.createSystemNotification({
        message: updateRatingError,
        variant: ERROR
      });
    }

    if (fetchRatingFulfilled) {
      const rating = this.findRatingForOrder();
      return this.setState({ rating: get(rating, 'rating', null) });
    }
  }

  handleFetchRating = () => {
    const { openTenderRef, orderId, actions } = this.props;
    return actions.fetchRating(openTenderRef, orderId);
  };

  handleSetRating = rating => {
    const { openTenderRef, orderId, actions } = this.props;
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
    const { ratings, orderId } = this.props;
    return ratings[orderId] ? get(ratings, `${orderId}`) : null;
  };

  render() {
    return RegistryLoader(
      {
        rating: get(this, 'state.rating', null),
        handleSetRating: this.handleSetRating
      },
      'components.OrderRating',
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
      createSystemNotification
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderRating);
