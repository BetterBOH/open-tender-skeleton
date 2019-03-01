import React from 'react';
import { HeroImage, LocationInfoCard } from 'components';
import get from 'utils/get';

const MenuHero = React.memo(({ location }) => {
  const heroImage = get(location, 'large_image_url', '');

  return (
    <div className="MenuHero bg-color-white">
      <HeroImage src={heroImage} />
      <div className="flex justify-center">
        <div className="MenuHero__location-card col-12 md:col-6 lg:col-4">
          <LocationInfoCard location={location} />
        </div>
      </div>
    </div>
  );
});

export default MenuHero;
