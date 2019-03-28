import React from 'react';
import { AddCreditCard } from 'components';

const PaymentDetails = React.memo(props => {
  const renderInner = () => {
    const { paymentType, orderRef, setPaymentMethod, cancel } = props;

    switch (paymentType) {
      case 'credit':
        return (
          <AddCreditCard
            paymentType={paymentType}
            orderRef={orderRef}
            setPaymentMethod={setPaymentMethod}
            cancel={cancel}
          />
        );
      default:
        return null;
    }
  };

  return <div className="col-12">{renderInner()}</div>;
});

export default PaymentDetails;
