import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { DetailItemRow } from 'components';
import documentation from 'components/DetailItemRow/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('DetailItemRow', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>{story()}</React.Suspense>
  ))
  .add(
    'default',
    () => <DetailItemRow label="Location" icon="Marker" value="Fort Greene" />,
    addons
  );
