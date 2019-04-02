import React from 'react';
import cx from 'classnames';
import { Text, Image, Icon, QuantitySpinner } from 'components';
import get from 'utils/get';
import PaymentMethods from 'constants/PaymentMethods';
import { AddPaymentMethod } from 'constants/PaymentDrawer';

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
        <div
          className="SelectPaymentMethodItem radius-sm flex flex-row bg-color-white shadow-md p1 mb1"
          onClick={() => selectExistingPaymentMethod(AddPaymentMethod)}
        >
          <div className="flex flex-none justify-center">
            <Icon
              className="ChoosePaymentTypeItem__icon m0 p0 items-end"
              icon={'Plus'}
              fill="gray"
            />
          </div>

          <div className="flex flex-col col-12 SelectPaymentMethodItem--description-container justify-center ml1">
            <Text size="description">
              {Language.t('selectPaymentMethod.addPayment')}
            </Text>
          </div>

          <div className="flex flex-none items-center justify-center">
            <Icon
              className="ChoosePaymentTypeItem__icon m0 p0 items-end"
              icon={isSelected ? 'RadioActive' : 'Radio'}
            />
          </div>
        </div>
      );
    }

    return (
      <div
        className="SelectPaymentMethodItem flex flex-row bg-color-white shadow-md p1 mb1"
        onClick={() =>
          selectExistingPaymentMethod(paymentMethod.customer_card_id)
        }
      >
        <div className="flex flex-none justify-center">
          <Image
            className="ChoosePaymentTypeItem--image m0 p0 items-end"
            src={get(PaymentMethods[paymentMethod.card_type], 'image', '')}
          />
        </div>
        <div className="flex flex-col col-12 SelectPaymentMethodItem--description-container justify-center ml1">
          <Text size="description">
            {`${paymentMethod.card_type} Ending in ****${paymentMethod.last4}`}
          </Text>
        </div>
        <div className="flex flex-none items-center justify-center">
          <Icon
            className="ChoosePaymentTypeItem__icon m0 p0 items-end"
            icon={isSelected ? 'RadioActive' : 'Radio'}
          />
        </div>
      </div>
    );
  }
);

export default SelectPaymentMethodItem;
