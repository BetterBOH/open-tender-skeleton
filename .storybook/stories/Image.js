import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { Image } from 'components';
import documentation from 'components/Image/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Image', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <Image
          className="col-4"
          src="https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png"
        />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'as background',
    () => (
      <React.Suspense fallback={<div />}>
        <Image
          className="App__background-image absolute t0 l0 r0 b0"
          src="http://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1516102022/pyo0i3pijc4pjrq4far7.jpg"
          bg={true}
        />
      </React.Suspense>
    ),
    addons
  );
