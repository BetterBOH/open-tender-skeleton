import React from 'react';
import { storiesOf } from '@storybook/react';

import { ConfirmButtons } from 'components';
import documentation from 'components/ConfirmButtons/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('ConfirmButtons', module)
  .add(
    'default - Continue with Close Icon',
    () => (
      <div className="col-12 flex justify-center px1">
        <ConfirmButtons />
      </div>
    ),
    addons
  )
  .add(
    'Submit Feedback with Back Icon',
    () => (
      <div className="col-12 flex justify-center px1">
        <ConfirmButtons
          confirmButtonText="Submit Feedback"
          cancelButtonIcon="Back"
        />
      </div>
    ),
    addons
  );
