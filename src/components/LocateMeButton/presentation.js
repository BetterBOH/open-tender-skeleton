import React from 'react';
import cx from 'classnames';

import { LinkButton, Text } from 'components';

const LocateMeButton = React.memo(props => {
  const { className, onClick, showLoading, localesContext } = props;
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
      iconLeftFill="gray"
      iconRight={null}
    >
      <Text
        size="extrasmall"
        className="text-extrabold uppercase color-white letter-spacing-md"
      >
        {showLoading
          ? Language.t('locations.loading')
          : Language.t('locations.locateMe')}
      </Text>
    </LinkButton>
  );
});

export default LocateMeButton;
