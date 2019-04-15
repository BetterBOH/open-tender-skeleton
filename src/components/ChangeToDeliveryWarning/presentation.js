import React from 'react';
import { Card, Text, ConfirmButtons } from 'components';

const ChangeToDeliveryWarning = React.memo(
  ({ onClose, handleConfirm, localesContext }) => (
    <Card className="pt1_5 pb1">
      <Text size="description" className="mb2 px1">
        {localesContext.Language.t('checkout.changeOrderToDelivery')}
      </Text>
      <ConfirmButtons handleConfirm={handleConfirm} handleCancel={onClose} />
    </Card>
  )
);

export default ChangeToDeliveryWarning;
