import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'state/store';
import { storiesOf } from '@storybook/react';

import { Anchor } from 'components';
import documentation from 'components/Anchor/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Anchor', module)
  .addDecorator(story => (
    <Router history={history}>
      <Route path="/" component={() => story()} />
    </Router>
  ))
  .add(
    'external link',
    () => <Anchor url="https://google.com">External link to Google</Anchor>,
    addons
  )
  .add(
    'internal link',
    () => <Anchor url="/home">Internal link to Home</Anchor>,
    addons
  );
