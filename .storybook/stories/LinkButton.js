import React from 'react';
import { storiesOf } from '@storybook/react';

import { LinkButton } from 'components';
import documentation from 'components/LinkButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('LinkButton', module)
  .add(
    'default',
    () => (
      <LinkButton
        className="col-12 sm:col-5"
        text="Click Me"
        onClick={() => alert('You did a click!')}
      />
    ),
    addons
  )
  .add(
    'with left icon',
    () => (
      <LinkButton
        className="col-12 sm:col-5"
        text="Click Me"
        onClick={() => alert('You did a click!')}
        iconLeft="Phone"
      />
    ),
    addons
  )
  .add(
    'with child elements',
    () => (
      <LinkButton
        className="col-12 sm:col-5"
        onClick={() => alert('You did a click!')}
        iconLeft="Heart"
      >
        <h2>Click this &lt;h2&gt;!</h2>
      </LinkButton>
    ),
    addons
  );
