import React from 'react';
import { storiesOf } from '@storybook/react';

import { location } from 'constants/Mocks';

import { LocationCard } from 'components';
import documentation from 'components/LocationCard/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('LocationCard', module).add(
  'default',
  () => (
    <div className="col-12 md:col-5 lg:col-4">
      <LocationCard location={location} />
    </div>
  ),
  addons
);
