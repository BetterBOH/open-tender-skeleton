import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

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
      <React.Suspense fallback={<div />}>
        <LocalesContext.Provider value={localesRegistry}>
          <LocalesContext.Consumer>
            {context => (
              <div className="col-12 md:col-5 lg:col-4">
                <FeedbackComment
                  comment={this.state.comment}
                  submitFeedback={this.submitFeedback}
                  handleUnsetRating={this.handleUnsetRating}
                  handleTextAreaChange={this.handleTextAreaChange}
                  localesContext={context}
                />
              </div>
            )}
          </LocalesContext.Consumer>
        </LocalesContext.Provider>
      </React.Suspense>
    );
  }
}

storiesOf('FeedbackComment', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <BrandStyle brand={brand} />
        <FeedbackCommentParent />
      </React.Suspense>
    ),
    addons
  );
