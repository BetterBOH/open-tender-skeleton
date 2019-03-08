import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { order } from 'constants/Mocks';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { PastOrderDetails } from 'components/PastOrderDetails';
import documentation from 'components/PastOrderDetails/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('PastOrderDetails', module)
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
          <div className="col-12 md:col-5 lg:col-4">
            <BrandStyle brand={brand} />
            <PastOrderDetails order={order} localesContext={context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
