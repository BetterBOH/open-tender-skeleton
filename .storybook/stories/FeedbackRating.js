import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { FeedbackRating } from 'components';
import documentation from 'components/FeedbackRating/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock feedback rating parent
class FeedbackRatingParent extends Component {
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

  handleClearRating = () => {
    this.setState({
      rating: 0,
      comment: '',
      userDidSetRating: false
    });
  };

  render() {
    return (
      <div className="col-12 md:col-5 lg:col-4">
        <FeedbackRating
          rating={this.state.rating}
          handleRatingClick={this.handleRatingClick}
          confirmButtonIsDisabled={!this.state.rating}
          handleSetRating={this.handleSetRating}
          handleClearRating={this.handleClearRating}
        />
      </div>
    );
  }
}

storiesOf('FeedbackRating', module).add(
  'default',
  () => <FeedbackRatingParent />,
  addons
);
