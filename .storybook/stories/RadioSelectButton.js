import React from 'react';
import { storiesOf } from '@storybook/react';

import { RadioSelectButton } from 'components';
import documentation from 'components/RadioSelectButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('RadioSelectButton', module)
  .add(
    'default with text and labels',
    () => (
      <div className="col-12 md:col-6 xl:col-4">
        <RadioSelectButton
          text="Smol"
          labelBold="$5.20"
          labelRegular="250 Cal"
        />
      </div>
    ),
    addons
  )
  .add(
    'default with text and bold label',
    () => (
      <div className="col-12 md:col-6 xl:col-4">
        <RadioSelectButton
          text="LevelUp Rewards"
          labelBold="$5 credit to spend!"
          isSelected={true}
        />
      </div>
    ),
    addons
  );
