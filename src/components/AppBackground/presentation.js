import React from 'react';
import get from 'utils/get';
import getRoutes from 'utils/getRoutes';
import { Image } from 'components';

const AppBackground = React.memo(({ location, brand }) => {
  const RoutesWithBackground = [
    getRoutes().WELCOME,
    getRoutes().LOGIN,
    getRoutes().SIGNUP,
    getRoutes().RESET,
    getRoutes().AUTH,
    getRoutes().PICKUP,
    getRoutes().DELIVERY,
    getRoutes().DASHBOARD
  ];

  if (!RoutesWithBackground.includes(get(location, 'pathname'))) {
    return null;
  }

  return (
    <Image
      className="fixed t0 l0 r0 b0 z-1"
      isBg={true}
      src={get(brand, 'large_image')}
    />
  );
});

export default AppBackground;
