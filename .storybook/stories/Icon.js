import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';

import icons from 'components/Icon/svgs';
import { Icon } from 'components';
import documentation from 'components/Icon/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Icon', module).add(
  'all icons',
  () => (
    <div className="flex flex-wrap col-6 md:col-8 lg:col-6">
      {Object.keys(icons).map(icon => (
        <div className="col-1">
          <Icon icon={icon} fill={color('Fill', '#322')} />
        </div>
      ))}
    </div>
  ),
  addons
);
