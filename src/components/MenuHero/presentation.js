import React from 'react';
import { HeroImage, LocationInfoCard } from 'components';
import get from 'utils/get';

const MenuHero = React.memo(({ location }) => {
  const heroImage = get(location, 'large_image_url', '');

  return (
    <div className="MenuHero bg-color-white relative z3">
      <div className="MenuHero__image flex flex-col md:flex-col-reverse">
        <HeroImage src={heroImage} />
      </div>
      <div className="MenuHero__location-card absolute flex justify-center col-12 md:col-6 lg:col-4 px1">
        <LocationInfoCard location={location} className="col-12" />
      </div>
    </div>
  );
});

export default MenuHero;
