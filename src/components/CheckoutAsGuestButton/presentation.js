import React from 'react';
import cx from 'classnames';
import get from 'utils/get';

import { LinkButton, Text } from 'components';

const CheckoutAsGuestButton = React.memo(props => {
  // TO-DO: Update presentation to match new designs #337
  const { className, localesContext, brandContext } = props;
  const { Language } = localesContext;
  const { colors } = brandContext;

  return (
    <LinkButton
      className={cx('CheckoutAsGuestButton radius-xl', className)}
      variant="bullet"
      to="/locations"
      iconLeft="UserCircle"
      iconLeftFill={get(colors, '[gray-dark]')}
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
