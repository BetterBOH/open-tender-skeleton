import React from 'react';
import { AddCreditCard } from 'components';
import { CREDIT_CARD } from 'constants/OpenTender';

const PaymentDetails = React.memo(props => {
  const renderInner = () => {
    const {
      actions,
      paymentType,
      openTenderRef,
      handleCancel,
      orderRef,
      userIsAuthenticated
    } = props;

    switch (paymentType) {
      case CREDIT_CARD:
        return (
          <AddCreditCard
            actions={actions}
            paymentType={paymentType}
            openTenderRef={openTenderRef}
            handleCancel={handleCancel}
            userIsAuthenticated={userIsAuthenticated}
            orderRef={orderRef}
          />
        );
      default:
        return null;
    }
  };

  return <div className="col-12 bg-color-gray-lighter">{renderInner()}</div>;
});

export default PaymentDetails;
