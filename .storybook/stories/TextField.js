import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Text, TextField, ConfirmButtons } from 'components';
import documentation from 'components/TextField/README.md';

import { isValidEmail } from 'utils/validation';
import cx from 'classnames';

const addons = {
  notes: { markdown: documentation }
};

// mock parent element
class TextFieldParent extends Component {
  state = { email: this.props.email, error: null };

  handleFieldChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = () => {
    if (!isValidEmail(this.state.email)) {
      return this.setState({
        error: 'Invalid email!'
      });
    }

    alert('Submitted successfully!');
    this.handleClear();
  };

  handleClear = () => {
    return this.setState({
      email: '',
      error: null
    });
  };

  render() {
    const { isDisabled, className, variant, iconLeft, label } = this.props;

    return (
      <div className="flex flex-col justify-center text-center p1 py2">
        <form className="radius-sm shadow-sm bg-color-white flex flex-col px1 py_5">
          <div className="flex flex-wrap justify-between items-center">
            <TextField
              isDisabled={isDisabled}
              className={cx(
                'my_5 radius-sm',
                {
                  'TextField--errored': this.state.error === 'Invalid email!'
                },
                className
              )}
              variant={variant}
              iconLeft={iconLeft}
              type="email"
              autoComplete="email"
              placeholder="Email Address"
              label={label}
              value={this.state.email}
              onChange={email => this.handleFieldChange('email', email)}
            />
          </div>
        </form>
        {!!this.state.error && (
          <Text
            className="TextField__error text-bold uppercase mx1 py_25"
            size="label-detail"
          >
            {this.state.error}
          </Text>
        )}
        <div className="col-12 flex justify-center absolute b0">
          <ConfirmButtons
            confirmButtonText="Submit"
            confirmButtonIsDisabled={!this.state.email}
            handleConfirm={this.handleSubmit}
            handleCancel={this.handleClear}
          />
        </div>
      </div>
    );
  }
}

storiesOf('TextField', module)
  .add('default (primary)', () => <TextFieldParent />, addons)
  .add('default with icon', () => <TextFieldParent iconLeft="At" />, addons)
  .add(
    'default with label',
    () => <TextFieldParent label="Email Address" />,
    addons
  )
  .add(
    'secondary with label',
    () => <TextFieldParent variant="secondary" label="Email Address" />,
    addons
  )
  .add(
    'default with label and icon',
    () => <TextFieldParent iconLeft="At" label="Email Address" />,
    addons
  );
