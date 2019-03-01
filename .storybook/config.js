import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/components';

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

function loadStories() {
  require('./stories/Anchor.js');
  require('./stories/Text.js');
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
  require('./stories/AccountDetails.js');
  require('./stories/AccountDetailsItem.js');
  require('./stories/CartButton');
  require('./stories/Rating.js');
  require('./stories/HeroImage.js');
  require('./stories/OrderTotals.js');
  require('./stories/QuantitySpinner');
  require('./stories/LineItemRow');
  require('./stories/LineItemsCard');
  require('./stories/OrderSummary');
  require('./stories/PastOrderDetails');
  require('./stories/PastOrderCard');
  require('./stories/PastOrdersIndex');
  require('./stories/RecentOrders');
}

configure(loadStories, module);
