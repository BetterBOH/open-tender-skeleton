import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/components';

import BrandStyle from 'lib/BrandStyle';
import { brand } from './brand';

import {
  ConfigContext,
  LocalesContext,
  RoutesContext,
  StoreContext,
  ComponentsContext,
  BrandContext,
  MapboxContext
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
    <ConfigContext.Provider>
      <BrandContext.Provider>
        <ComponentsContext.Provider>
          <RoutesContext.Provider>
            <StoreContext.Provider>
              <LocalesContext.Provider>
                <MapboxContext.Provider>
                  <BrandStyle brand={brand} />
                  {story()}
                </MapboxContext.Provider>
              </LocalesContext.Provider>
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
