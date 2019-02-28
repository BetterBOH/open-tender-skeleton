import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

class FeedbackRating extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      submitRating: PropTypes.func
    })
  };

  static defaultProps = {
    actions: {
      submitRating: f => f
    }
  };

  state = {
    rating: 0,
    comment: '',
    userDidSetRating: false
  };

  handleRatingClick = rating => {
    this.setState({
      rating: rating,
      userDidSetRating: true
    });
  };

  handleSubmit = () => {
    const { actions } = this.props;

    return actions.submitRating({
      rating: this.state.rating,
      comment: this.state.comment
    });
  };

  render() {
    return RegistryLoader(
      {
        rating: this.state.rating,
        userDidSetRating: this.state.userDidSetRating,
        handleRatingClick: this.handleRatingClick,
        handleSubmit: this.handleSubmit,
        localesContext: this.props.localesContext
      },
      'components.FeedbackRating',
      () => import('./presentation.js')
    );
  }
}

export { FeedbackRating };
export default withLocales(FeedbackRating);
