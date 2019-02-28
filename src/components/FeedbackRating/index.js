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
    this.setState({ rating });
  };

  render() {
    return RegistryLoader(
      {
        ...this.props,
        rating: this.state.rating,
        handleRatingClick: this.handleRatingClick
      },
      'components.FeedbackRating',
      () => import('./presentation.js')
    );
  }
}

export { FeedbackRating };
export default withLocales(FeedbackRating);
