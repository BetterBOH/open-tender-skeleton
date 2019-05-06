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
          <Icon className="ChoosePaymentTypeItem__icon mr1" icon="Plus" />
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

    const renderIsDefault = () => {
      if (paymentMethod.is_default) {
        return (
          <Text size="description">
            ({Language.t('selectPaymentMethod.default')})
          </Text>
        );
      }

      return null;
    };

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
          <div className="flex flex-col">
            <Text size="description">
              {`${paymentMethod.card_type} Ending in ****${
                paymentMethod.last4
              }`}
            </Text>
            {renderIsDefault()}
          </div>
        </RadioSelectButton>
      </div>
    );
  }
);

export default SelectPaymentMethodItem;
