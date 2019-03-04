import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { ConfirmButtons } from 'components';
import documentation from 'components/ConfirmButtons/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('ConfirmButtons', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <BrandStyle brand={brand} />
      {story()}
    </React.Suspense>
  ))
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
