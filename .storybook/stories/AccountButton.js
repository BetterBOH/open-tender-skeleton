import React from 'react';
import { storiesOf } from '@storybook/react';

import { customer } from 'constants/Mocks';

import { AccountButton } from 'components';
import documentation from 'components/AccountButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('AccountButton', module)
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
