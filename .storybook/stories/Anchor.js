import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'state/store';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { Anchor } from 'components';
import documentation from 'components/Anchor/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Anchor', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <Router history={history}>
      <Route path="/" component={() => story()} />
    </Router>
  ))
  .add(
    'external link',
    () => (
      <React.Suspense fallback={<div />}>
        <Anchor url="https://google.com">External link to Google</Anchor>
      </React.Suspense>
    ),
    addons
  )
  .add(
    'internal link',
    () => (
      <React.Suspense fallback={<div />}>
        <Anchor url="/home">Internal link to Home</Anchor>
      </React.Suspense>
    ),
    addons
  );
