import React from 'react';
import cx from 'classnames';
import SideCurtainVariants from 'constants/SideCurtainVariants';
import { MiniCart } from '../index';
import { Text } from 'components';

const { MINI_CART } = SideCurtainVariants;

const Spunner = React.memo(() => {
  return <div className="Spinner__loader" />;
});

export default Spunner;
