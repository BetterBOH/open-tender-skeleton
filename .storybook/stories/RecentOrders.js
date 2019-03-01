import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { order } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';

import { RecentOrders } from 'components/RecentOrders';
import documentation from 'components/RecentOrders/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('RecentOrders', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <LocalesContext.Provider value={localesRegistry}>
        {story()}
      </LocalesContext.Provider>
    </React.Suspense>
  ))
  .add(
    'default with orders',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-5 lg:col-4">
            <RecentOrders
              orders={Array(9).fill(order)}
              localesContext={context}
            />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  )
  .add(
    'default with 1 order',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-5 lg:col-4">
            <RecentOrders
              orders={Array(1).fill(order)}
              localesContext={context}
            />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  )
  .add(
    'default with no orders',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-5 lg:col-4">
            <RecentOrders localesContext={context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
