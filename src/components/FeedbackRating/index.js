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
      rating: rating
    });
  };

  handleSetRating = () => {
    this.setState({
      userDidSetRating: true
    });
  };

  handleTextAreaChange = ({ target }) => {
    this.setState({
      comment: target.value
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
        userDidSetRating: this.state.userDidSetRating,
        rating: this.state.rating,
        comment: this.state.comment,
        handleRatingClick: this.handleRatingClick,
        handleSetRating: this.handleSetRating,
        handleTextAreaChange: this.handleTextAreaChange,
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
