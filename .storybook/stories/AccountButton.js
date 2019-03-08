import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { customer } from 'constants/Mocks';
import StoreProvider from 'state/Provider';

import { AccountButton } from 'components/AccountButton';
import documentation from 'components/AccountButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('AccountButton', module)
  .addDecorator(checkA11y)
  .addDecorator(story => <StoreProvider>{story()}</StoreProvider>)
  .add('default unauthenticated', () => <AccountButton />, addons)
  .add(
    'unauthenticated with user icon',
    () => <AccountButton icon="User" />,
    addons
  )
  .add(
    'authenticated',
    () => <AccountButton userIsAuthenticated={true} customer={customer} />,
    addons
  );
