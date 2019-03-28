import React from 'react';
import { ChoosePaymentTypeItem, Text, ConfirmButtons } from 'components';

const ChoosePaymentType = React.memo(props => {
  const {
    brandContext,
    localesContext,
    paymentTypes,
    confirm,
    cancel,
    newPaymentMethodType,
    selectPaymentMethodType
  } = props;

  const { Language } = localesContext;

  return (
    <div className="ChoosePaymentType p1 pt1_5 pb1_5 bg-color-gray-light col-12">
      <div className="col-12 pb1_5">
        <Text size="cta" className="break-word">
          {Language.t('choosePaymentType.header')}
        </Text>
      </div>
      <div className="pb1_5">
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
      <div>
        <ConfirmButtons
          confirmButtonIsDisabled={!newPaymentMethodType}
          confirmButtonText={Language.t('choosePaymentType.confirm')}
          handleConfirm={confirm}
          cancelButtonIcon={'Clear'}
          handleCancel={cancel}
        />
      </div>
    </div>
  );
});

export default ChoosePaymentType;
