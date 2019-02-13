import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { customer } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { AccountButton } from 'components';
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
        {story()}
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
            <AccountButton {...context} />
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
            <AccountButton icon="User" {...context} />
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
            <AccountButton customer={customer} {...context} />
          </Fragment>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
