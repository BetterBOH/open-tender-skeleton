import React from 'react';
import {
  MenuSectionHeader,
  MenuSectionItemsMedium,
  MenuSectionItemsSmall,
  MenuSectionItemsLarge
} from 'components';
import MenuAppearances from 'constants/MenuAppearances';
import get from 'utils/get';

const MenuSection = React.memo(({ menuSection }) => {
  const { items, appearance } = menuSection;

  return (
    <div className="MenuSection mb3">
      <MenuSectionHeader menuSection={menuSection} />

      {(() => {
        switch (appearance) {
          case MenuAppearances.SMALL:
            return <MenuSectionItemsSmall items={items} />;
          case MenuAppearances.MEDIUM:
            return <MenuSectionItemsMedium items={items} />;
          case MenuAppearances.LARGE:
            return <MenuSectionItemsLarge items={items} />;
          default:
            return <MenuSectionItemsMedium items={items} />;
        }
      })()}
    </div>
  );
});

export default MenuSection;
