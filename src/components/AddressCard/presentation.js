import React from 'react';
import cx from 'classnames';
import { Icon, Text, Button } from 'components';
import getAddressFromFeature from 'utils/getAddressFromFeature';

const AddressCard = React.memo(
  ({ className, address, feature, onClick, buttonLabel }) => {
    if (!address && !feature) return null;

    const cardAddress =
      !address && feature ? getAddressFromFeature(feature) : address;

    return (
      <Button
        variant="no-style"
        className={cx(className, 'flex flex-wrap w100 pr_5')}
        onClick={onClick}
      >
        <Icon
          className="GeocoderResultsListItem__icon m1 pt_25"
          icon="Marker"
        />
        <div className="col-7 py1">
          <Text size="detail" className="text-bold color-black block mb_25">
            {cardAddress.street_address}
          </Text>
          <Text size="detail" className="text-semibold color-gray">
            {cardAddress.city}, {cardAddress.state_code}
            {cardAddress.zip_code && `, ${cardAddress.zip_code}`}
          </Text>
        </div>
        {buttonLabel && (
          <div className="Button Button--secondary flex self-center items-center justify-center bg-color-gray-dark hover-bg-color-gray color-white col-3">
            <Text
              size="detail"
              className="text-bold uppercase letter-spacing-md"
            >
              {buttonLabel}
            </Text>
          </div>
        )}
      </Button>
    );
  }
);

export default AddressCard;
