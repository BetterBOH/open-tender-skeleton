import React from 'react';
import { Text } from 'components';

const MenuSectionHeader = React.memo(({ menuSection }) => {
  const { name, description } = menuSection;

  return (
    <div className="MenuSection__header mb2 col-12 md:col-6 lg:col-4">
      <Text size="headline" className="block mb_5">
        {name}
      </Text>
      <Text size="body" className="block color-gray-dark">
        {description}
      </Text>
    </div>
  );
});

export default MenuSectionHeader;
