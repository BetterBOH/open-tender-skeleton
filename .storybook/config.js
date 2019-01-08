import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

addDecorator(
  withNotes,
  withOptions({
    name: 'Open Tender Skeleton',
    theme: {
      ...themes.normal
    }
  })
);

function loadStories() {
  require('./stories/Text.js');
}

configure(loadStories, module);
