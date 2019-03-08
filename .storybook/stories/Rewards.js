import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { rewards } from 'constants/Mocks';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { Rewards } from 'components/Rewards';
import documentation from 'components/Rewards/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Rewards', module)
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
            <Rewards
              rewards={rewards}
              localesContext={context}
              LocalesProvider={LocalesContext}
            />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
