import React from 'react';
import cx from 'classnames';

import { Icon, Text, Button } from 'components';

const LinkButton = React.memo(
  ({
    className,
    children,
    iconLeft,
    iconLeftFill,
    iconRight,
    iconRightFill,
    onClick,
    text,
    to,
    variant
  }) => {
    const textSize = variant === 'small' ? 'small' : 'cta';

    return (
      <Button
        onClick={onClick}
        to={to}
        variant="no-style"
        className={cx(
          'LinkButton flex flex-wrap items-center w100',
          className,
          {
            'LinkButton--primary shadow-sm radius-md p1 bg-color-white':
              variant === 'primary',
            'LinkButton--small my_5': variant === 'small'
          }
        )}
      >
        {iconLeft ? (
          <div className="LinkButton__icon col-1">
            <Icon icon={iconLeft} fill={iconLeftFill} />
          </div>
        ) : null}

        <div
          className={cx('px1', {
            'col-10': iconLeft && iconRight,
            'col-11': (!iconLeft && iconRight) || (iconLeft && !iconRight),
            'col-12': !iconLeft && !iconRight
          })}
        >
          {text ? <Text size={textSize}>{text}</Text> : children}
        </div>

        {iconRight ? (
          <div className="LinkButton__icon col-1 text-right">
            <Icon icon={iconRight} fill={iconRightFill} />
          </div>
        ) : null}
      </Button>
    );
  }
);

export default LinkButton;
