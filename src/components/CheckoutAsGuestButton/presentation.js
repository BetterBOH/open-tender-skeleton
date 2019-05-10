import React from 'react';
import cx from 'classnames';
import get from 'utils/get';

import { LinkButton, Text } from 'components';

const CheckoutAsGuestButton = React.memo(props => {
  // TO-DO: Update presentation to match new designs #337
  const { className, localesContext, brandContext } = props;
  const { Language } = localesContext;

  return (
    <LinkButton
      className={cx('CheckoutAsGuestButton radius-xl', className)}
      variant="bullet-with-border"
      to="/locations"
      iconLeft="UserCircle"
      iconLeftFill={get(brandContext, 'colors[gray-dark]')}
      iconRight={null}
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
