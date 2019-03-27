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
    <div className="ChoosePaymentType bg-color-gray-light p1 col-12">
      <div className="col12 ChoosePaymentType--padding-bottom">
        <Text size="cta" className="break-word">
          {Language.t('choosePaymentType.header')}
        </Text>
      </div>
      <div className="ChoosePaymentType--padding-bottom">
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
