import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { accountDetails } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { AccountDetails } from 'components/AccountDetails';
import documentation from 'components/AccountDetails/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('AccountDetails', module)
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
          <AccountDetails
            accountDetails={accountDetails}
            localesContext={context}
          />
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
