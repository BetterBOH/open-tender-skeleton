import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/components';

import StoreProvider from 'state/Provider';
import BrandStyle from 'lib/BrandStyle';
import { brand } from './brand';

import {
  ConfigContext,
  configRegistry,
  LocalesContext,
  localesRegistry,
  RoutesContext,
  routesRegistry,
  StoreContext,
  stateRegistry,
  ComponentsContext,
  componentRegistry,
  BrandContext,
  brandRegistry,
  MapboxContext,
  mapboxRegistry
} from 'tests/mocks/config';

addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(
  withOptions({
    name: 'Open Tender Skeleton',
    theme: {
      ...themes.normal
    }
  })
);
addDecorator(checkA11y);

/**
 * Bootstrap mock context together for all stories
 */
addDecorator(story => (
  <React.Suspense fallback={<div />}>
    <ConfigContext.Provider value={configRegistry}>
      <BrandContext.Provider value={brandRegistry}>
        <ComponentsContext.Provider value={componentRegistry}>
          <RoutesContext.Provider value={routesRegistry}>
            <StoreContext.Provider value={stateRegistry}>
              <StoreProvider>
                <LocalesContext.Provider value={localesRegistry}>
                  <MapboxContext.Provider value={mapboxRegistry}>
                    <BrandStyle brand={brand} />
                    {story()}
                  </MapboxContext.Provider>
                </LocalesContext.Provider>
              </StoreProvider>
            </StoreContext.Provider>
          </RoutesContext.Provider>
        </ComponentsContext.Provider>
      </BrandContext.Provider>
    </ConfigContext.Provider>
  </React.Suspense>
));

/**
 * Dynamically load all stories in ./stories
 */
const req = require.context('./stories', true, /\.js$/);
const loadStories = () => req.keys().forEach(story => req(story));

configure(loadStories, module);
