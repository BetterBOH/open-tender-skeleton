import React from 'react';
import { Text, Icon, Image } from 'components';
import get from 'utils/get';

const OrderSummaryDetail = React.memo(props => {
  const { value, label, icon, imageUrl, brandContext } = props;

  if (!value) return null;

  return (
    <div className="OrderSummary__detail flex items-center">
      {label ? (
        <Text size="description" className="color-gray-dark mr_5">
          {label}
        </Text>
      ) : null}
      <div className="flex items-center bg-color-gray-lighter radius-sm p_5">
        {icon ? (
          <div className="OrderSummary__icon mr_5">
            <Icon
              icon={icon}
              variant="small"
              fill={get(brandContext, 'colors[gray-light]')}
            />
          </div>
        ) : null}
        {imageUrl ? (
          <div className="OrderSummary__image mr_5">
            <Image className="w100 h100 radius-md" src={imageUrl} />
          </div>
        ) : null}
        <Text size="description" className="color-black">
          {value}
        </Text>
      </div>
    </div>
  );
});

export default OrderSummaryDetail;
