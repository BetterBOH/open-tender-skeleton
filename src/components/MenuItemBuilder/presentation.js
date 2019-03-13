import React from 'react';

const MenuItemBuilder = React.memo(({ lineItem }) => {
  console.log(lineItem);
  return (
    <div className="MenuItemBuilder bg-color-white">
      <div className="" />
    </div>
  );
});

export default MenuItemBuilder;
