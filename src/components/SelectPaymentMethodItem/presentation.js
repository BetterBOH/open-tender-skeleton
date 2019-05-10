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
        <div className="SelectPaymentMethodItem radius-sm flex items-center bg-color-white shadow-sm px1">
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

    const renderPaymentType = () => {
      if (paymentMethod.is_default) {
        return (
          <Text className="color-gray-dark" size="label-detail">
            {`${paymentMethod.card_type} ${Language.t(
              'selectPaymentMethod.default'
            )}`}
          </Text>
        );
      }

      return (
        <Text className="color-gray-dark" size="label-detail">
          {paymentMethod.card_type}
        </Text>
      );
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
            {renderPaymentType()}
            <Text size="description">
              {`${Language.t('selectPaymentMethod.ccEndingIn')}${
                paymentMethod.last4
              }`}
            </Text>
          </div>
        </RadioSelectButton>
      </div>
    );
  }
);

export default SelectPaymentMethodItem;
