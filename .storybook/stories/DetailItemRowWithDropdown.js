import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { DetailItemRowWithDropdown } from 'components';
import documentation from 'components/DetailItemRowWithDropdown/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('DetailItemRowWithDropdown', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>{story()}</React.Suspense>
  ))
  .add(
    'default',
    () => (
      <DetailItemRowWithDropdown
        label="Email"
        icon="At"
        value="GeorgeWashington@gmail.com"
      >
        <span>Test Dropdown Content</span>
      </DetailItemRowWithDropdown>
    ),
    addons
  );
