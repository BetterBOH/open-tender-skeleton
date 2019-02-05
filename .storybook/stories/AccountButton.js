import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { AccountButton } from 'components';
import documentation from 'components/AccountButton/README.md';
import 'styles.scss';

import { customer } from 'constants/Mocks';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('AccountButton', module)
  .addDecorator(checkA11y)
  .add(
    'default unauthenticated',
    () => (
      <React.Suspense fallback={<div />}>
        <AccountButton />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'unauthenticated with user icon',
    () => (
      <React.Suspense fallback={<div />}>
        <AccountButton icon="User" />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'authenticated',
    () => (
      <React.Suspense fallback={<div />}>
        <AccountButton customer={customer} />
      </React.Suspense>
    ),
    addons
  );
