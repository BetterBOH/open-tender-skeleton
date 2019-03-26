import React from 'react';
import cx from 'classnames';

import { LinkButton, Text } from 'components';

const CheckoutAsGuestButton = React.memo(props => {
  const { className, localesContext } = props;
  const { Language } = localesContext;

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
        {Language.t('auth.checkoutAsGuest')}
      </Text>
    </LinkButton>
  );
});

export default CheckoutAsGuestButton;
