import React from 'react';
import cx from 'classnames';
import get from 'utils/get';

import { LinkButton, Text } from 'components';

const LocateMeButton = React.memo(props => {
  // TO-DO: Update presentation to match new designs #337
  const {
    className,
    onClick,
    showLoading,
    localesContext,
    brandContext
  } = props;
  const { Language } = localesContext;

  return (
    <LinkButton
      className={cx(
        'LocateMeButton bg-color-gray-dark radius-xl wauto',
        className
      )}
      variant="bullet"
      onClick={onClick}
      iconLeft="Location"
      iconLeftFill={get(brandContext, 'colors.gray')}
      iconRight={null}
    >
      <Text
        size="detail"
        className="text-bold uppercase color-white letter-spacing-md"
      >
        {showLoading
          ? Language.t('locations.loading')
          : Language.t('locations.locateMe')}
      </Text>
    </LinkButton>
  );
});

export default LocateMeButton;
