import React from 'react';
import get from 'utils/get';
import getRoutes from 'utils/getRoutes';
import { Image } from 'components';

const AppBackground = React.memo(({ location, brandContext }) => {
  const RoutesWithBackground = [
    getRoutes().WELCOME,
    getRoutes().LOGIN,
    getRoutes().SIGNUP,
    getRoutes().RESET,
    getRoutes().AUTH,
    getRoutes().PICKUP,
    getRoutes().DELIVERY
  ];

  if (!RoutesWithBackground.includes(get(location, 'pathname'))) {
    return null;
  }

  return (
    <Image
      className="bg-cover absolute t0 l0 r0 b0 z-1"
      isBg={true}
      src={get(brandContext, 'backgroundImage')}
    />
  );
});

export default AppBackground;
