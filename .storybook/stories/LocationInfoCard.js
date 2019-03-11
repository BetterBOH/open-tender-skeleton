import React from 'react';
import { storiesOf } from '@storybook/react';

import { location } from 'constants/Mocks';

import { LocationInfoCard } from 'components';
import documentation from 'components/LocationInfoCard/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('LocationInfoCard', module).add(
  'default',
  () => (
    <div className="col-12 md:col-5 lg:col-4">
      <LocationInfoCard location={location} />
    </div>
  ),
  addons
);
