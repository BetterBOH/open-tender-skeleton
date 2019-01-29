import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { color } from '@storybook/addon-knobs';

import Icon, { icons } from 'components/Icon';
import documentation from 'components/Icon/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Icon', module)
  .addDecorator(checkA11y)
  .add(
    'all icons',
    () => (
      <React.Suspense fallback={<div />}>
        <div className="flex flex-wrap col-6 md:col-8 lg:col-6">
          {Object.keys(icons).map(icon => (
            <div className="col-1">
              <Icon icon={icon} fill={color('Fill', '#322')} />
            </div>
          ))}
        </div>
      </React.Suspense>
    ),
    addons
  );
