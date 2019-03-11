import React from 'react';
import { Text } from 'components';

const MenuCategoryHeader = React.memo(({ menuCategory }) => {
  const { name, description } = menuCategory;

  return (
    <div className="MenuCategory__header mb2 col-12 md:col-6 lg:col-4">
      <Text size="headline" className="block mb_5">
        {name}
      </Text>
      <Text size="body" className="block color-gray-dark">
        {description}
      </Text>
    </div>
  );
});

export default MenuCategoryHeader;
