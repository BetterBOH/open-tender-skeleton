import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { order } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';

import { PastOrderCard } from 'components/PastOrderCard';
import documentation from 'components/PastOrderCard/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('PastOrderCard', module)
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
            <PastOrderCard order={order} localesContext={context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  )
  .add(
    'with reorder price',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-5 lg:col-4">
            <PastOrderCard
              order={order}
              showReorderPrice={true}
              localesContext={context}
            />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
