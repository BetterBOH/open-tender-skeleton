import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class Feedback extends PureComponent {
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

  handleUnsetRating = () => {
    this.setState({
      userDidSetRating: false
    });
  };

  handleClearRating = () => {
    this.setState({
      rating: 0,
      comment: '',
      userDidSetRating: false
    });
  };

  handleTextAreaChange = value => {
    this.setState({
      comment: value
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
        handleUnsetRating: this.handleUnsetRating,
        handleClearRating: this.handleClearRating,
        handleTextAreaChange: this.handleTextAreaChange,
        handleSubmit: this.handleSubmit
      },
      'components.Feedback',
      () => import('./presentation.js')
    );
  }
}

export default Feedback;
