import React from 'react';
import { Text, Icon } from 'components';
import get from 'utils/get';

const DetailItemRow = React.memo(props => {
  const { label, icon, value, brandContext } = props;

  if (!value) return null;

  return (
    <div className="DetailItemRow flex justify-between items-center py1 pl1 pr_5">
      <Text
        size="extrasmall"
        className="text-bold color-gray-dark letter-spacing-sm uppercase"
      >
        {label}
      </Text>
      <div className="flex bg-color-gray-light radius-sm p_5">
        <div className="DetailItemRow__icon mr_25">
          <Icon icon={icon} fill={get(brandContext, 'colors.gray')} />
        </div>
        <Text size="extrasmall" className="color-black">
          {value}
        </Text>
      </div>
    </div>
  );
});

export default DetailItemRow;
