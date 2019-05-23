import React from 'react';
import cx from 'classnames';
import { Icon, Text, Button } from 'components';
import getAddressFromFeature from 'utils/getAddressFromFeature';

const AddressCard = React.memo(({ className, address, feature, onClick }) => {
  if (!address && !feature) return null;

  const cardAddress =
    !address && feature ? getAddressFromFeature(feature) : address;

  return (
    <Button
      variant="no-style"
      className={cx(className, 'flex flex-wrap w100')}
      onClick={onClick}
    >
      <Icon className="GeocoderResultsListItem__icon m1 pt_25" icon="Marker" />
      <div className="col-9 py1">
        <Text size="detail" className="text-bold color-black block mb_25">
          {cardAddress.street_address}
        </Text>
        <Text size="detail" className="text-semibold color-gray">
          {cardAddress.city}, {cardAddress.state_code}
          {cardAddress.zip_code && `, ${cardAddress.zip_code}`}
        </Text>
      </div>
    </Button>
  );
});

export default AddressCard;
