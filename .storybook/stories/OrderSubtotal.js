import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { LocalesContext, localesRegistry } from '../mockConfig';

import { OrderSubtotal } from 'components/OrderSubtotal';
import documentation from 'components/OrderSubtotal/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('OrderSubtotal', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <LocalesContext.Provider value={localesRegistry}>
        {story()}
      </LocalesContext.Provider>
    </React.Suspense>
  ))
  .add(
    'default',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-6 lg:col-3">
            <OrderSubtotal subtotal={14.2} localesContext={context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
