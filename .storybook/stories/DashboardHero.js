import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { location } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import DashboardHero from 'components/DashboardHero';
import documentation from 'components/DashboardHero/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('DashboardHero', module)
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
          <DashboardHero
            customerFirstName="Hugh"
            heroImageUrl={location.large_image_url}
            localesContext={context}
          />
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
