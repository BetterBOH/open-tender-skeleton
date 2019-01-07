import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

function loadStories() {
  require('./stories/Text.js');
}

addDecorator(withNotes);
configure(loadStories, module);
