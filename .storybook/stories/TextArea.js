import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { TextArea } from 'components';
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
      <TextArea
        name="comment"
        className="Text--size-description color-gray-dark border-color-white m1"
        value={this.state.value}
        onChange={this.onChange}
        placeholder="enter comment here"
      />
    );
  }
}

storiesOf('TextArea', module)
  .addDecorator(checkA11y)
  .add('comment', () => <TextAreaParent />, addons);
