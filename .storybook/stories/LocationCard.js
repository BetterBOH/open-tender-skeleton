import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import LocationCard from 'components/LocationCard';
import documentation from 'components/LocationCard/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

const mockLocation = {
  name: 'Bleecker Street',
  distance: '1.1 miles away',
  image:
    'https://media-cdn.tripadvisor.com/media/photo-s/16/0b/ec/c5/we-believe-we-have-a.jpg',
  address: '255 Bleecker Street, New York, New York, 10014',
  phone: '646-964-5984',
  hours: {
    monday: '11AM to 11PM',
    tuesday: '11AM to 11PM',
    wednesday: '11AM to 11PM',
    thursday: '11AM to 11PM',
    friday: '11AM to 11PM',
    saturday: '11AM to 11PM',
    sunday: '11AM to 11PM'
  },
  locationIsOpen: true
};

storiesOf('LocationCard', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <div className="col-1 md:col-5 lg:col-4">
          <LocationCard {...mockLocation} />
        </div>
      </React.Suspense>
    ),
    addons
  );
