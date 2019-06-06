import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class FeedbackComment extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      comment: PropTypes.string,
      submitFeedback: PropTypes.func
    }),
    onClose: PropTypes.func
  };

  static defaultProps = {
    data: {
      comment: '',
      submitFeedback: f => f
    },
    onClose: f => f
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      comment: props.data.comment
    };
  }

  handleTextAreaChange = value => this.setState({ comment: value });

  handleSubmit = () => {
    const { data, onClose } = this.props;

    onClose();

    return data.submitFeedback(this.state.comment);
  };

  render() {
    return RegistryLoader(
      {
        comment: this.state.comment,
        handleSubmit: this.handleSubmit,
        handleTextAreaChange: this.handleTextAreaChange,
        onClose: this.props.onClose
      },
      'components.FeedbackComment',
      () => import('./presentation.js')
    );
  }
}

export default FeedbackComment;
