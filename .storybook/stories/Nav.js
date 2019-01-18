import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Nav from 'components/Nav';
import documentation from 'components/Nav/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Nav', module)
  .addDecorator(checkA11y)
  .add(
    'with logo',
    () => (
      <React.Suspense fallback={<div />}>
        <Nav
          brand={{
            logoImage:
              'https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png'
          }}
        />
      </React.Suspense>
    ),
    addons
  );
