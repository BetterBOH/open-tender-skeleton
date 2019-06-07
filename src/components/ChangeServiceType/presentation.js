import React from 'react';
import { Card, ListOptionButton } from 'components';

const ChangeServiceType = React.memo(({ onClick, localesContext }) => (
  <Card className="ChangeServiceType py2 px1 md:p0">
    <ListOptionButton
      icon="Repeat"
      onClick={onClick}
      text={localesContext.Language.t('checkout.changeServiceType')}
      ariaLabel={localesContext.Language.t('checkout.changeServiceType')}
      anchorTitle={localesContext.Language.t('checkout.changeServiceType')}
    />
  </Card>
));

export default ChangeServiceType;
