import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { LinkButton } from 'components';
import documentation from 'components/LinkButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('LinkButton', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <LinkButton
          className="col-12 sm:col-5"
          text="Click Me"
          onClick={() => alert('You did a click!')}
        />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'with left icon',
    () => (
      <React.Suspense fallback={<div />}>
        <LinkButton
          className="col-12 sm:col-5"
          text="Click Me"
          onClick={() => alert('You did a click!')}
          iconLeft="Phone"
        />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'with child elements',
    () => (
      <React.Suspense fallback={<div />}>
        <LinkButton
          className="col-12 sm:col-5"
          onClick={() => alert('You did a click!')}
          iconLeft="Heart"
        >
          <h2>Click this &lt;h2&gt;!</h2>
        </LinkButton>
      </React.Suspense>
    ),
    addons
  );
