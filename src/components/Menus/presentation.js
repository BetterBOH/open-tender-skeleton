import React from 'react';
import { MenuSection } from 'components';

const Menus = React.memo(({ menu }) => {
  const sections = menu.menu;

  return (
    <div className="Menus bg-color-white px2">
      {sections.map(section => (
        <MenuSection menuSection={section} />
      ))}
    </div>
  );
});

export default Menus;
