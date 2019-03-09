import React from 'react';
import { storiesOf } from '@storybook/react';

import { accountDetails } from 'constants/Mocks';

import { AccountDetails } from 'components';
import documentation from 'components/AccountDetails/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('AccountDetails', module).add(
  'default',
  () => <AccountDetails accountDetails={accountDetails} />,
  addons
);
