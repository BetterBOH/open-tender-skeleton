import React from 'react';
import cx from 'classnames';

import { Icon, Text, Button, Image } from 'components';

const RadioSelect = React.memo(
  ({
    className,
    imageUrl,
    text,
    labelBold,
    labelRegular,
    isSelected,
    onClick
  }) => {
    return (
      <Button
        onClick={onClick}
        variant="no-style"
        className={cx(
          'RadioSelect flex flex-wrap items-center w100 shadow-sm radius-md p1',
          className,
          { 'RadioSelect--selected': isSelected }
        )}
      >
        {!!imageUrl && (
          <div className="RadioSelect__image col-1 mr1">
            <Image src={imageUrl} />
          </div>
        )}

        <div className="col-10 flex flex-col color-gray">
          {(!!labelBold || !!labelRegular) && (
            <div className="color-gray-dark">
              <Text size="label-detail" className="mr1 text-bold">
                {labelBold}
              </Text>
              <Text size="label-detail">{labelRegular}</Text>
            </div>
          )}
          <Text size="description">{text}</Text>
        </div>
        <div className="RadioSelect__icon col-1 text-right ml1">
          <Icon icon={isSelected ? 'Radio' : 'RadioActive'} fill="gray" />
        </div>
      </Button>
    );
  }
);

export default RadioSelect;
