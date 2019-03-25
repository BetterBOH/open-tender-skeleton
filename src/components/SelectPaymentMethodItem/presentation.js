import React from 'react';
import cx from 'classnames';
import { Text, Image, Icon, QuantitySpinner } from 'components';
import get from 'utils/get';

const SelectPaymentMethodItem = React.memo(
  ({ brandContext, localesContext, paymentType, onClick }) => {
    const { Language } = localesContext;

    return (
      <div
        className="SelectPaymentMethodItem flex flex-row bg-color-white shadow-md p1 mb1"
        onClick={onClick}
      >
        <div className="flex flex-none justify-center">
          <Icon
            className="AddPaymentTypeItem__icon m0 p0 items-end"
            icon={'Plus'}
            fill="gray"
          />
        </div>

        <div className="flex flex-col SelectPaymentMethodItem--description-container justify-center ml1">
          <Text size="description" className="col-12">
            Add Payment Method
          </Text>
        </div>

        <div className="flex flex-none items-center justify-center">
          <Icon
            className="AddPaymentTypeItem__icon m0 p0 items-end"
            icon={'Details'}
            fill="gray"
          />
        </div>
      </div>
    );
  }
);

export default SelectPaymentMethodItem;
