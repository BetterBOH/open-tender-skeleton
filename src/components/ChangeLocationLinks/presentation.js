import React from 'react';
import { ListOptionButton, Card } from 'components';

const ChangeLocationLinks = React.memo(
  ({ goToLocations, goToCurrentMenu, localesContext }) => {
    return (
      <Card className="ChangeLocationLinks py2 px1 md:p0">
        <ListOptionButton
          icon="Repeat"
          onClick={goToLocations}
          text={localesContext.Language.t('checkout.changeLocation')}
          ariaLabel={localesContext.Language.t('checkout.changeLocation')}
          anchorTitle={localesContext.Language.t('checkout.changeLocation')}
        />
        <ListOptionButton
          icon="Map"
          onClick={goToCurrentMenu}
          text={localesContext.Language.t('checkout.viewMenu')}
          ariaLabel={localesContext.Language.t('checkout.viewMenu')}
          anchorTitle={localesContext.Language.t('checkout.viewMenu')}
        />
      </Card>
    );
  }
);

export default ChangeLocationLinks;
