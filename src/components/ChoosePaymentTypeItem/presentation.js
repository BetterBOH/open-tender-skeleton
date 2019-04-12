import React from 'react';
import { Text, Image, RadioSelectButton } from 'components';
import PaymentMethods from 'constants/PaymentMethods';
import get from 'utils/get';

const ChoosePaymentTypeItem = React.memo(
  ({ localesContext, paymentType, isSelected, selectPaymentMethodType }) => {
    const { Language } = localesContext;

    return (
      <div className="ChoosePaymentTypeItem radius-sm flex items-center bg-color-white shadow-sm px1 mb1">
        <Image
          className="ChoosePaymentTypeItem--image"
          src={get(PaymentMethods['Credit Card'], 'image', '')}
        />
        <RadioSelectButton
          isSelected={isSelected}
          onClick={() => selectPaymentMethodType(paymentType)}
        >
          <div className="flex flex-col ChoosePaymentTypeItem__description-container justify-center ml1">
            <Text size="description" className="col-12">
              {Language.t(`choosePaymentType.${paymentType}.secondaryText`)}
            </Text>
            <Text size="description" className="col-12">
              {Language.t(`choosePaymentType.${paymentType}.primaryText`)}
            </Text>
          </div>
        </RadioSelectButton>
      </div>
    );
  }
);

export default ChoosePaymentTypeItem;
