import React from 'react';
import cx from 'classnames';
import { Text, Image, Icon, QuantitySpinner } from 'components';

const AddPaymentTypeItem = React.memo(
  ({ paymentImage, descriptiveText, callToActionText, iconName, onClick }) => {
    return (
      <div
        className="AddPaymentTypeItem flex flex-row bg-color-white"
        onClick={onClick}
      >
        <div className="flex-none">
          <Image className="AddPaymentTypeItem--image" src={paymentImage} />
        </div>

        <div className="flex flex-col AddPaymentTypeItem--description-container">
          <Text className="col-12">{descriptiveText}</Text>
          <Text className="col-12">{callToActionText}</Text>
        </div>

        <div className="flex-none">
          <Icon className="m0 p0" icon={iconName} fill="gray" />
        </div>
      </div>
    );
  }
);

export default AddPaymentTypeItem;
