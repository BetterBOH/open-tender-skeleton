import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/Text.js');
}

configure(loadStories, module);
