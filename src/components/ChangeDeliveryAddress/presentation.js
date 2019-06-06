import React from 'react';
import { ListOptionButton, Card } from 'components';

const ChangeDeliveryAddress = React.memo(
  ({ goToDelivery, goToCurrentMenu, localesContext }) => {
    return (
      <Card className="ChangeDeliveryAddress py2 px1 md:p0">
        <ListOptionButton
          icon="Repeat"
          onClick={goToDelivery}
          text={localesContext.Language.t('checkout.changeAddress')}
          ariaLabel={localesContext.Language.t('checkout.changeAddress')}
          anchorTitle={localesContext.Language.t('checkout.changeAddress')}
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

export default ChangeDeliveryAddress;
