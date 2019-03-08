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

function loadStories() {
  require('./stories/Anchor.js');
  require('./stories/Text.js');
  require('./stories/TextArea');
  require('./stories/Image.js');
  require('./stories/Icon.js');
  require('./stories/Button.js');
  require('./stories/LinkButton.js');
  require('./stories/Nav.js');
  require('./stories/Card.js');
  require('./stories/MapboxMap.js');
  require('./stories/LocationCard.js');
  require('./stories/LocationInfoCard.js');
  require('./stories/Footer.js');
  require('./stories/AccountButton.js');
  require('./stories/DetailItemRow');
  require('./stories/DetailItemRowWithDropdown');
  require('./stories/AccountDetails.js');
  require('./stories/CartButton');
  require('./stories/ConfirmButtons');
  require('./stories/Rating.js');
  require('./stories/HeroImage.js');
  require('./stories/OrderSubtotal');
  require('./stories/OrderTotals.js');
  require('./stories/QuantitySpinner');
  require('./stories/LineItemRow');
  require('./stories/LineItemsCard');
  require('./stories/OrderSummary');
  require('./stories/DashboardOrderSummary');
  require('./stories/PastOrderDetails');
  require('./stories/CheckoutDetails');
  require('./stories/PastOrderCard');
  require('./stories/PastOrdersIndex');
  require('./stories/RecentOrders');
  require('./stories/FeedbackRating');
  require('./stories/FeedbackComment');
  require('./stories/FeedbackRating');
  require('./stories/Feedback');
  require('./stories/Rewards');
  require('./stories/RewardItem');
}

configure(loadStories, module);
