import React from 'react';
import get from 'utils/get';
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
    alt,
    brandContext
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
        className={cx('LinkButton flex items-center w100 px1', className, {
          'LinkButton--primary shadow-sm radius-md p1': variant === 'primary',
          'LinkButton--small my_5': variant === 'small',
          'LinkButton--bullet': variant === 'bullet',
          'LinkButton--with-top-border pt1': variant === 'with-top-border'
        })}
      >
        {iconLeft ? (
          <div className="LinkButton__icon col-1 mr1">
            <Icon
              icon={iconLeft}
              fill={get(brandContext, `colors.${iconLeftFill}`)}
            />
          </div>
        ) : null}

        <div
          className={cx({
            'col-10': iconLeft && iconRight,
            'col-11': (!iconLeft && iconRight) || (iconLeft && !iconRight),
            'col-12': !iconLeft && !iconRight
          })}
        >
          {text ? <Text size={textSize(variant)}>{text}</Text> : children}
        </div>

        {iconRight ? (
          <div className="LinkButton__icon col-1 text-right ml1">
            <Icon
              icon={iconRight}
              fill={get(brandContext, `colors.${iconRightFill}`)}
            />
          </div>
        ) : null}
      </Button>
    );
  }
);

export default LinkButton;
