import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import StoreProvider from 'state/Provider';

import { Nav } from 'components/Nav';
import documentation from 'components/Nav/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Nav', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <LocalesContext.Provider value={localesRegistry}>
        <StoreProvider>{story()}</StoreProvider>
      </LocalesContext.Provider>
    </React.Suspense>
  ))
  .add(
    'with logo',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <Fragment>
            <Nav
              brandContext={{
                logoImage:
                  'https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png'
              }}
              localesContext={context}
            />
          </Fragment>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
