import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { LocalesContext, localesRegistry } from '../mockConfig';

import { FeedbackRating } from 'components/FeedbackRating';
import documentation from 'components/FeedbackRating/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('FeedbackRating', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <LocalesContext.Provider value={localesRegistry}>
        {story()}
      </LocalesContext.Provider>
    </React.Suspense>
  ))
  .add(
    'default',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-5 lg:col-4">
            <FeedbackRating localesContext={context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
