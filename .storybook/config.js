import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/components';

addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(
  withOptions({
    name: 'Open Tender Skeleton',
    theme: {
      ...themes.normal
    }
  })
);

function loadStories() {
  require('./stories/Text.js');
  require('./stories/Image.js');
  require('./stories/Icon.js');
  require('./stories/Button.js');
  require('./stories/Nav.js');
  require('./stories/Card.js');
}

configure(loadStories, module);
