import React from 'react';
import { Text, Image, Icon, RadioSelectButton } from 'components';
import get from 'utils/get';
import PaymentMethods, { ADD_PAYMENT_METHOD } from 'constants/PaymentMethods';

const SelectPaymentMethodItem = React.memo(
  ({
    localesContext,
    paymentMethod,
    isSelected,
    selectExistingPaymentMethod,
    addPaymentMethod
  }) => {
    const { Language } = localesContext;

    if (addPaymentMethod) {
      return (
        <div className="SelectPaymentMethodItem radius-sm flex items-center bg-color-white shadow-sm px1 mb1">
          <Icon
            className="ChoosePaymentTypeItem__icon mr1"
            icon={'Plus'}
            fill="gray"
          />
          <RadioSelectButton
            isSelected={isSelected}
            onClick={() => selectExistingPaymentMethod(ADD_PAYMENT_METHOD)}
          >
            <Text size="description">
              {Language.t('selectPaymentMethod.addPayment')}
            </Text>
          </RadioSelectButton>
        </div>
      );
    }

    return (
      <div className="SelectPaymentMethodItem flex items-center bg-color-white shadow-sm px1 mb1">
        <Image
          className="ChoosePaymentTypeItem--image mr1"
          src={get(PaymentMethods[paymentMethod.card_type], 'image', '')}
        />
        <RadioSelectButton
          isSelected={isSelected}
          onClick={() =>
            selectExistingPaymentMethod(paymentMethod.customer_card_id)
          }
        >
          <Text size="description">
            {`${paymentMethod.card_type} Ending in ****${paymentMethod.last4}`}
          </Text>
        </RadioSelectButton>
      </div>
    );
  }
);

export default SelectPaymentMethodItem;
