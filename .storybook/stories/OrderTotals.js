import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { OrderTotals } from 'components/OrderTotals';
import documentation from 'components/OrderTotals/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

const mockData = {
  subtotalWithTax: 14.2,
  rewards: -5.0,
  total: 9.2
};

storiesOf('OrderTotals', module)
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
          <div className="md:flex md:justify-center md:mx1">
            <BrandStyle brand={brand} />
            <OrderTotals data={mockData} localesContext={context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
