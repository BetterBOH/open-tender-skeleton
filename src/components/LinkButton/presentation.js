import React from 'react';
import cx from 'classnames';

import { Icon, Text, Button } from 'components';

const LinkButton = React.memo(
  ({
    className,
    isDisabled,
    disabledClassName,
    variant,
    children,
    text,
    iconLeft,
    iconLeftFill,
    iconRight,
    iconRightFill,
    onClick,
    to,
    ariaLabel,
    anchorTitle
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

    const classnames = variant => {
      switch (variant) {
        case 'primary':
          return 'LinkButton--primary shadow-sm radius-md p1 px1';
        case 'small':
          return 'LinkButton--small my_5';
        case 'bullet':
          return 'LinkButton--bullet px1';
        case 'with-top-border':
          return 'LinkButton--with-top-border pt1 px1';
        default:
          return '';
      }
    };

    return (
      <Button
        onClick={onClick}
        to={to}
        isDisabled={isDisabled}
        disabledClassName={disabledClassName}
        ariaLabel={ariaLabel}
        anchorTitle={anchorTitle}
        variant="no-style"
        className={cx(
          'LinkButton flex items-center w100',
          classnames(variant),
          className
        )}
      >
        {iconLeft ? (
          <div className="LinkButton__icon col-1 mr_5">
            <Icon icon={iconLeft} fill={iconLeftFill} />
          </div>
        ) : null}

        <div
          className={cx('nowrap text-overflow-ellipsis overflow-hidden', {
            'col-12': (iconLeft && iconRight) || (!iconLeft && !iconRight),
            'col-11': (!iconLeft && iconRight) || (iconLeft && !iconRight)
          })}
        >
          {text ? <Text size={textSize(variant)}>{text}</Text> : children}
        </div>

        {iconRight ? (
          <div className="LinkButton__icon col-1 text-right ml1">
            <Icon icon={iconRight} fill={iconRightFill} />
          </div>
        ) : null}
      </Button>
    );
  }
);

export default LinkButton;
