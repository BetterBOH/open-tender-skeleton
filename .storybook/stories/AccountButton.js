import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { customer } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';
import StoreProvider from 'state/Provider';

import { AccountButton } from 'components/AccountButton';
import documentation from 'components/AccountButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('AccountButton', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <LocalesContext.Provider value={localesRegistry}>
        <StoreProvider>{story()}</StoreProvider>
      </LocalesContext.Provider>
    </React.Suspense>
  ))
  .add(
    'default unauthenticated',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <Fragment>
            <BrandStyle brand={brand} />
            <AccountButton localesContext={context} />
          </Fragment>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  )
  .add(
    'unauthenticated with user icon',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <Fragment>
            <BrandStyle brand={brand} />
            <AccountButton icon="User" localesContext={context} />
          </Fragment>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  )
  .add(
    'authenticated',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <Fragment>
            <BrandStyle brand={brand} />
            <AccountButton
              userIsAuthenticated={true}
              customer={customer}
              localesContext={context}
            />
          </Fragment>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
