import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { rewards } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { RewardItem } from 'components/RewardItem';
import documentation from 'components/RewardItem/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('RewardItem', module)
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
        {context => {
          return (
            <div className="col-12 md:col-5 lg:col-4">
              <RewardItem reward={rewards[0]} Language={context.Language} />
            </div>
          );
        }}
      </LocalesContext.Consumer>
    ),
    addons
  );
