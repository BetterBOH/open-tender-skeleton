import React from 'react';

import { Image } from 'components';

const HeroImage = React.memo(props => {
  const { src } = props;

  return (
    <div className="HeroImage">
      <Image src={src} alt="" isBg />
    </div>
  );
});

export default HeroImage;
