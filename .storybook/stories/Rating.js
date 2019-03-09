import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Rating } from 'components';
import documentation from 'components/Rating/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock parent element
class RatingParent extends Component {
  state = { rating: 3 };

  userDidSetRating = rating => {
    this.setState({ rating });
  };

  render() {
    return (
      <Rating
        isInteractive={this.props.isInteractive}
        rating={this.state.rating}
        onChange={this.userDidSetRating}
      />
    );
  }
}

storiesOf('Rating', module)
  .add('default (not interactive)', () => <RatingParent />, addons)
  .add('interactive', () => <RatingParent isInteractive />, addons);
