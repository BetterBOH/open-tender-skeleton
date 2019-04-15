import React from 'react';
import { Card, Text, ConfirmButtons } from 'components';

const ChangeToDeliveryWarning = React.memo(({ onClose, handleConfirm }) => (
  <Card className="pt1_5 pb1">
    <Text size="description" className="mb2 px1">
      By changing to delivery, you will have to start your order over again.
    </Text>
    <ConfirmButtons handleConfirm={handleConfirm} handleCancel={onClose} />
  </Card>
));

export default ChangeToDeliveryWarning;
