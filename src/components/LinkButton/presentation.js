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
    variant,
    alt
  }) => {
    const textSize = variant => {
      switch (variant) {
        case 'small':
          return 'small';
        case 'with-top-border':
          return 'description';
        default:
          return 'cta';
      }
    };

    return (
      <Button
        alt={alt}
        onClick={onClick}
        to={to}
        variant="no-style"
        className={cx(
          'LinkButton flex flex-wrap items-center w100',
          className,
          {
            'LinkButton--primary shadow-sm radius-md p1 bg-color-white':
              variant === 'primary',
            'LinkButton--small my_5': variant === 'small',
            'LinkButton--with-top-border pt1': variant === 'with-top-border'
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
          {text ? <Text size={textSize(variant)}>{text}</Text> : children}
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
