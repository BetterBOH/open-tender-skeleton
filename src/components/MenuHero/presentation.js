import React from 'react';
import { HeroImage, MenuNav, LocationInfoCard } from 'components';
import get from 'utils/get';

const MenuHero = React.memo(({ location, menu }) => {
  const heroImage = get(location, 'large_image_url', '');

  return (
    <div className="MenuHero bg-color-white">
      <div className="flex flex-col md:flex-col-reverse">
        <MenuNav menu={menu} />
        <HeroImage src={heroImage} />
      </div>
      <div className="MenuHero__location-card-wrapper flex justify-center">
        <div className="MenuHero__location-card col-12 md:col-6 lg:col-4 mx2">
          <LocationInfoCard location={location} />
        </div>
      </div>
    </div>
  );
});

export default MenuHero;
