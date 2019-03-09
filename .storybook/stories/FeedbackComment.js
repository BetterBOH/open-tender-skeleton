import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { FeedbackComment } from 'components';
import documentation from 'components/FeedbackComment/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock feedback comment parent
class FeedbackCommentParent extends Component {
  state = {
    rating: 0,
    comment: '',
    userDidSetRating: true
  };

  handleUnsetRating = () => {
    this.setState({
      userDidSetRating: false
    });
  };

  handleTextAreaChange = value => {
    this.setState({
      comment: value
    });
  };

  submitFeedback = () => {
    console.log({
      rating: this.state.rating,
      comment: this.state.comment
    });
  };

  render() {
    return (
      <div className="col-12 md:col-5 lg:col-4">
        <FeedbackComment
          comment={this.state.comment}
          submitFeedback={this.submitFeedback}
          handleUnsetRating={this.handleUnsetRating}
          handleTextAreaChange={this.handleTextAreaChange}
        />
      </div>
    );
  }
}

storiesOf('FeedbackComment', module).add(
  'default',
  () => <FeedbackCommentParent />,
  addons
);
