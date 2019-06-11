import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Image } from 'components';

const HeroImage = React.memo(props => {
  const { src, className } = props;

  return (
    <div className={cx('HeroImage', className)}>
      <Image src={src} isBg={true} isHero={true} />
    </div>
  );
});

export default HeroImage;

HeroImage.PropTypes = {
  className: PropTypes.string,
  src: PropTypes.string
};

HeroImage.defaultProps = {
  className: '',
  src: null
};
