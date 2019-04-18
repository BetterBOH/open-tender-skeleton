import React from 'react';
import { storiesOf } from '@storybook/react';

import { checkoutDetails } from 'constants/Mocks';
import { CheckoutDetails } from 'components';
import documentation from 'components/CheckoutDetails/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('CheckoutDetails', module).add(
  'default',
  () => (
    <div className="col-12 md:col-6">
      <CheckoutDetails checkoutDetails={checkoutDetails} />
    </div>
  ),
  addons
);
