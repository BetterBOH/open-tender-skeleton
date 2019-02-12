import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { location } from 'constants/Mocks';
import HeroImage from 'components/HeroImage';
import documentation from 'components/HeroImage/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('HeroImage', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <HeroImage src={location.large_image_url} />
      </React.Suspense>
    ),
    addons
  );
