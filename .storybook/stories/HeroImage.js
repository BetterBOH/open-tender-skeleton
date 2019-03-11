import React from 'react';
import { storiesOf } from '@storybook/react';

import { location } from 'constants/Mocks';
import { HeroImage } from 'components';
import documentation from 'components/HeroImage/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('HeroImage', module).add(
  'default',
  () => <HeroImage src={location.large_image_url} />,
  addons
);
