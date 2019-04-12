import React from 'react';
import { AddCreditCard } from 'components';

const PaymentDetails = React.memo(props => {
  const renderInner = () => {
    const { actions, paymentType, openTenderRef, handleCancel } = props;

    switch (paymentType) {
      case 'credit':
        return (
          <AddCreditCard
            actions={actions}
            paymentType={paymentType}
            openTenderRef={openTenderRef}
            handleCancel={handleCancel}
          />
        );
      default:
        return null;
    }
  };

  return <div className="col-12">{renderInner()}</div>;
});

export default PaymentDetails;
