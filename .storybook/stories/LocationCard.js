import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { mockLocation } from '../mockLocation';
import LocationCard from 'components/LocationCard';
import documentation from 'components/LocationCard/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('LocationCard', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <div className="col-1 md:col-5 lg:col-4">
          <LocationCard location={mockLocation} />
        </div>
      </React.Suspense>
    ),
    addons
  );
