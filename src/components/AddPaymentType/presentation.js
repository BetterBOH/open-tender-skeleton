import React from 'react';
import { AddPaymentTypeItem, Text, Button } from 'components';

const AddPaymentType = React.memo(props => {
  const paymentTypes = [
    {
      paymentImage:
        'https://dsprindle.com/wp-content/uploads/emv-chip-card.jpg',
      descriptiveText: 'No Account Connected',
      callToActionText: 'Add a Credit Card',
      iconName: 'Details'
    },
    {
      paymentImage:
        'https://dsprindle.com/wp-content/uploads/emv-chip-card.jpg',
      descriptiveText: 'No Account Connected',
      callToActionText: 'Add a Credit Card',
      iconName: 'Details'
    },
    {
      paymentImage:
        'https://dsprindle.com/wp-content/uploads/emv-chip-card.jpg',
      descriptiveText: 'No Account Connected',
      callToActionText: 'Add a Credit Card',
      iconName: 'Details'
    },
    {
      paymentImage:
        'https://cdn.shopify.com/s/files/1/0014/3186/3369/products/U-MD-61-2_450x269.jpg?v=1534449157',
      descriptiveText: 'No Account Connected',
      callToActionText: 'Add a Credit Card',
      iconName: 'Details'
    }
  ];
  return (
    <div className="bg-color-white">
      <Text>What type of payment method would you like to add?</Text>
      {paymentTypes.map((paymentType, index) => {
        const {
          paymentImage,
          descriptiveText,
          callToActionText,
          iconName
        } = paymentType;
        return (
          <AddPaymentTypeItem
            paymentImage={paymentImage}
            descriptiveText={descriptiveText}
            callToActionText={callToActionText}
            iconName={iconName}
          />
        );
      })}
      <Button>Confirm Selection</Button>
      <Button>X</Button>
    </div>
  );
});

export default AddPaymentType;
