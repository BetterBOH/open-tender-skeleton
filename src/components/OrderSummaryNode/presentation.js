import React from 'react';
import { Text, Icon, Image } from 'components';

const OrderSummaryNode = React.memo(props => {
  const { value, label, icon, imageUrl } = props;

  if (!value) return null;

  return (
    <div className="OrderSummary__node flex items-center">
      {label ? (
        <Text
          size="description"
          className="color-gray-dark letter-spacing-sm mr_5"
        >
          {label}
        </Text>
      ) : null}
      <div className="flex items-center bg-color-gray-light radius-sm p_5">
        {icon ? (
          <div className="OrderSummary__icon mr_5">
            <Icon icon={icon} fill="gray" />
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

export default OrderSummaryNode;
