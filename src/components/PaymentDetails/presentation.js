import React from 'react';
import { AddCreditCard } from 'components';

const PaymentDetails = React.memo(props => {
  const renderInner = () => {
    const { paymentType, openTenderRef, createPayment, handleCancel } = props;

    switch (paymentType) {
      case 'credit':
        return (
          <AddCreditCard
            paymentType={paymentType}
            openTenderRef={openTenderRef}
            createPayment={createPayment}
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
