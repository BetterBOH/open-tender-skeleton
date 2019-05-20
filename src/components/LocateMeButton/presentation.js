import React from 'react';
import cx from 'classnames';
import get from 'utils/get';

import { LinkButton, Text } from 'components';

const LocateMeButton = React.memo(props => {
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
      isDisabled={showLoading}
      className={cx('LocateMeButton radius-xl wauto', className)}
      enabledClassName="bg-color-gray-dark bg-hover-color-black color-white"
      disabledClassName="disabled bg-color-gray-light color-gray"
      variant="bullet"
      onClick={onClick}
      iconLeft="Location"
      iconLeftFill={
        showLoading
          ? get(brandContext, 'colors.gray')
          : get(brandContext, 'colors.white')
      }
      iconRight={null}
    >
      <Text size="detail" className="text-bold uppercase letter-spacing-md">
        {showLoading
          ? Language.t('locations.loading')
          : Language.t('locations.locateMe')}
      </Text>
    </LinkButton>
  );
});

export default LocateMeButton;
