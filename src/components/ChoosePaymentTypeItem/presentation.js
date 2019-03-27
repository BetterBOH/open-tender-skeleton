import React from 'react';

import { Text, Image, Icon } from 'components';
import { creditCard } from 'assets';

const ChoosePaymentTypeItem = React.memo(
  ({
    brandContext,
    localesContext,
    paymentType,
    isSelected,
    selectPaymentMethodType
  }) => {
    const { Language } = localesContext;

    return (
      <div
        className="ChoosePaymentTypeItem flex flex-row bg-color-white shadow-md p1 mb1"
        onClick={() => selectPaymentMethodType(paymentType)}
      >
        <div className="flex flex-none justify-center">
          <Image className="ChoosePaymentTypeItem--image" src={creditCard} />
        </div>

        <div className="flex flex-col ChoosePaymentTypeItem--description-container justify-center ml1">
          <Text size="description" className="col-12">
            {Language.t(`choosePaymentType.${paymentType}.secondaryText`)}
          </Text>
          <Text size="description" className="col-12">
            {Language.t(`choosePaymentType.${paymentType}.primaryText`)}
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

export default ChoosePaymentTypeItem;
