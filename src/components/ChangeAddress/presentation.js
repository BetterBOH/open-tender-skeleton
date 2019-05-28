import React from 'react';
import { ListOptionButton, Card } from 'components';

const ChangeAddress = React.memo(
  ({ goToDelivery, goToCurrentMenu, localesContext }) => {
    return (
      <Card className="ChangeAddress py2 px1 md:p0">
        <ListOptionButton
          icon="Repeat"
          onClick={goToDelivery}
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

export default ChangeAddress;
