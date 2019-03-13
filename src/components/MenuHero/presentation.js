import React from 'react';
import { HeroImage, MenuNav, LocationInfoCard } from 'components';
import get from 'utils/get';

const MenuHero = React.memo(({ location, menuCategories }) => {
  const heroImage = get(location, 'large_image_url', '');

  return (
    <div className="MenuHero bg-color-white">
      <HeroImage src={heroImage} />
      <div className="none md:block">
        <MenuNav menuCategories={menuCategories} />
      </div>
      <div className="flex justify-center">
        <div className="MenuHero__location-card col-12 md:col-6 lg:col-4">
          <LocationInfoCard location={location} />
        </div>
      </div>
    </div>
  );
});

export default MenuHero;
