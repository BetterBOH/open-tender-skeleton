import React from 'react';
import cx from 'classnames';
import { Text, Image, Icon, QuantitySpinner } from 'components';
import get from 'utils/get';

const AddPaymentTypeItem = React.memo(
  ({ brandContext, localesContext, paymentType, onClick }) => {
    const { Language } = localesContext;

    return (
      <div
        className="AddPaymentTypeItem flex flex-row bg-color-white m1 shadow-md"
        onClick={onClick}
      >
        <div className="flex flex-none justify-center ml1">
          <Image
            className="AddPaymentTypeItem--image"
            src={
              'https://www.visa.ca/en_CA/run-your-business/small-business-solutions/visa-business-card/_jcr_content/par/cardstack/cardStackColumn1/image.img.png/1522891088169.png'
            }
          />
        </div>

        <div className="flex flex-col AddPaymentTypeItem--description-container justify-center ml1">
          <Text size="description" className="col-12">
            {Language.t(`paymentTypes.${paymentType}.secondaryText`)}
          </Text>
          <Text size="description" className="col-12">
            {Language.t(`paymentTypes.${paymentType}.primaryText`)}
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

export default AddPaymentTypeItem;
