import React from 'react';
import { Card, ChoosePaymentTypeItem, Text, ConfirmButtons } from 'components';

const ChoosePaymentType = React.memo(props => {
  const {
    paymentTypes,
    switchToCreatePaymentMethod,
    switchToSelectExistingPaymentMethod,
    newPaymentMethodType,
    selectPaymentMethodType,
    localesContext
  } = props;

  const { Language } = localesContext;

  return (
    <Card
      className="ChoosePaymentType pt1_5 pb1 bg-color-gray-lighter col-12"
      variant="payment-methods"
    >
      <div className="px1">
        <div className="text-bold pb1_5">
          <Text size="cta">{Language.t('choosePaymentType.header')}</Text>
        </div>
        <div>
          {paymentTypes.map(paymentType => {
            return (
              <ChoosePaymentTypeItem
                key={paymentType}
                paymentType={paymentType}
                isSelected={newPaymentMethodType === paymentType}
                selectPaymentMethodType={selectPaymentMethodType}
              />
            );
          })}
        </div>
      </div>
      <div className="pt1">
        <ConfirmButtons
          confirmButtonIsDisabled={
            !paymentTypes.some(
              paymentType => paymentType === newPaymentMethodType
            )
          }
          confirmButtonText={Language.t('choosePaymentType.confirm')}
          handleConfirm={switchToCreatePaymentMethod}
          cancelButtonIcon="Close"
          handleCancel={switchToSelectExistingPaymentMethod}
        />
      </div>
    </Card>
  );
});

export default ChoosePaymentType;
