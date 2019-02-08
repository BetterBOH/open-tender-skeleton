import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Rating from 'components/Rating';
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
      <React.Suspense fallback={<div />}>
        <Rating
          isInteractive={this.props.isInteractive}
          rating={this.state.rating}
          onChange={this.userDidSetRating}
        />
      </React.Suspense>
    );
  }
}

storiesOf('Rating', module)
  .addDecorator(checkA11y)
  .add('default (not interactive)', () => <RatingParent />, addons)
  .add('interactive', () => <RatingParent isInteractive />, addons);
