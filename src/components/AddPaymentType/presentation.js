import React from 'react';
import { AddPaymentTypeItem, Text, Button, Icon } from 'components';

const AddPaymentType = React.memo(props => {
  const { paymentTypes } = props;

  return (
    <div className="bg-color-white">
      <div className="m1">
        <Text size="cta" className="m1 AddPaymentTypeItem--border break-word">
          What type of payment method would you like to add?
        </Text>
      </div>
      {paymentTypes.map(paymentType => {
        return (
          <AddPaymentTypeItem key={paymentType} paymentType={paymentType} />
        );
      })}
      <div className="AddPaymentTypeItem--border m1 p1">
        <Button className="bg-color-gray-dark p1 br1">Confirm Selection</Button>
        <Button className="bg-color-gray-dark circle ml1">
          <Icon fill="white" icon="Close" />
        </Button>
      </div>
    </div>
  );
});

export default AddPaymentType;
