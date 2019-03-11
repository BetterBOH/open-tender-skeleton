import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { MapboxMap } from 'components';
import documentation from 'components/MapboxMap/README.md';

const addons = {
  notes: { markdown: documentation }
};

const mapbox = {
  mapboxApiKey:
    'pk.eyJ1IjoiamNoYXJyaW5ndG9uNCIsImEiOiJjanJqZ2x2b3QwY2VwNDNxaXNmc25lbmdkIn0.FdRdTCa4oaDgzq_qx0LVvA',
  styleUrl:
    'https://api.mapbox.com/styles/v1/sanctuary/cjrjicmlx0q7o2snory8ap62x.html?fresh=true&title=true&access_token=pk.eyJ1Ijoic2FuY3R1YXJ5IiwiYSI6ImNqZ2ZocjZmMzBheTgyd29reGg1MzN6ZDcifQ.IZG0xxM4m1uqOEa-xVi1Jg#12.0/48.866500/2.317600/0'
};

storiesOf('MapboxMap', module)
  .addDecorator(checkA11y)
  .add('Generic Map', () => <MapboxMap {...mapbox} />, addons);
