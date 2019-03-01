import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import TextArea from 'components/TextArea';
import documentation from 'components/TextArea/README.md';

const addons = {
  notes: { markdown: documentation }
};

// mock parent element
class TextAreaParent extends Component {
  state = { value: '' };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <React.Suspense fallback={<div />}>
        <TextArea
          value={this.state.value}
          onChange={this.onChange}
          placeholder="enter comment here"
        />
      </React.Suspense>
    );
  }
}

storiesOf('TextArea', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <TextAreaParent />
      </React.Suspense>
    ),
    addons
  );
