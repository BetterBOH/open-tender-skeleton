import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { checkoutDetails } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { CheckoutDetails } from 'components/CheckoutDetails';
import documentation from 'components/CheckoutDetails/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('CheckoutDetails', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <LocalesContext.Provider value={localesRegistry}>
        <BrandStyle brand={brand} />
        {story()}
      </LocalesContext.Provider>
    </React.Suspense>
  ))
  .add(
    'default',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-5 lg:col-4">
            <CheckoutDetails
              checkoutDetails={checkoutDetails}
              localesContext={context}
            />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
