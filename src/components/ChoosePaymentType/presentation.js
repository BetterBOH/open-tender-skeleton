import React from 'react';
import { Card, ChoosePaymentTypeItem, Text, ConfirmButtons } from 'components';

const ChoosePaymentType = React.memo(props => {
  const {
    paymentTypes,
    confirm,
    cancel,
    newPaymentMethodType,
    selectPaymentMethodType,
    localesContext
  } = props;

  const { Language } = localesContext;

  return (
    <Card
      className="ChoosePaymentType pt1_5 pb1 bg-color-gray-light col-12"
      variant="payment-methods"
    >
      <div className="px1">
        <div className="col-12 pb1_5">
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
          confirmButtonIsDisabled={!newPaymentMethodType}
          confirmButtonText={Language.t('choosePaymentType.confirm')}
          handleConfirm={confirm}
          cancelButtonIcon="Close"
          handleCancel={cancel}
        />
      </div>
    </Card>
  );
});

export default ChoosePaymentType;
