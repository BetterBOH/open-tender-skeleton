import React from 'react';
import { AddPaymentType } from 'components';

const SelectPaymentType = React.memo(props => {
  const { paymentTypes } = props;

  return (
    <div className="col12 z3">
      <AddPaymentType />
    </div>
  );
});

export default SelectPaymentType;
