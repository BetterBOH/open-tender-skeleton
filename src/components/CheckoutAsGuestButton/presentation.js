import React from 'react';
import cx from 'classnames';

import { LinkButton, Text } from 'components';

const CheckoutAsGuestButton = React.memo(props => {
  const { className } = props;

  return (
    <LinkButton
      className={cx('CheckoutAsGuestButton radius-xl', className)}
      variant="bullet"
      to="/locations"
      iconLeft="UserCircle"
      iconLeftFill="gray-dark"
    >
      <Text
        size="extrasmall"
        className="text-extrabold uppercase color-gray-dark letter-spacing-md"
      >
        Check out as a guest
      </Text>
    </LinkButton>
  );
});

export default CheckoutAsGuestButton;
