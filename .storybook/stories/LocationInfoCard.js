import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { location } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { LocationInfoCard } from 'components/LocationInfoCard';
import documentation from 'components/LocationInfoCard/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('LocationInfoCard', module)
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
            <LocationInfoCard location={location} localesContext={context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
