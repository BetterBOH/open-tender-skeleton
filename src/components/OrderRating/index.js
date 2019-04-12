import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createRating, fetchRating, updateRating } from 'brandibble-redux';
import { PENDING, FULFILLED } from 'constants/Status';
import get from 'utils/get';

class OrderRating extends PureComponent {
  static propTypes = {
    orderId: PropTypes.number // TODO: use model
  };

  static defaultProps = {
    orderId: null // TODO: use model
  };

  componentDidMount() {
    this.handleFetchRating();
  }

  componentDidUpdate(prevProps) {
    const didCreateRatingStatus =
      get(prevProps, 'createRatingStatus') === PENDING &&
      get(this, 'props.createRatingStatus') === FULFILLED;
    const didUpdateRatingStatus =
      get(prevProps, 'updateRatingStatus') === PENDING &&
      get(this, 'props.updateRatingStatus') === FULFILLED;

    if (didCreateRatingStatus || didUpdateRatingStatus) {
      this.handleFetchRating();
    }
  }

  handleFetchRating = () => {
    const { openTenderRef, orderId, actions } = this.props;
    return actions.fetchRating(openTenderRef, orderId);
  };

  handleSetRating = rating => {
    const { openTenderRef, orderId, actions } = this.props;
    const ratingForOrder = this.findRatingForOrder();

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
    const ratingForOrder = this.findRatingForOrder();

    return RegistryLoader(
      {
        rating: get(ratingForOrder, 'rating'),
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
  updateRatingStatus: get(state, 'openTender.status.updateRating')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchRating,
      createRating,
      updateRating
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderRating);
