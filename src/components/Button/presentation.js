import React from 'react';
import cx from 'classnames';

import { Text } from 'components';

import { Link } from 'react-router-dom';

const Button = React.memo(
  ({
    className,
    variant,
    children,
    text,
    onClick,
    to,
    linkIsExternal,
    type,
    ariaLabel,
    anchorTitle,
    isDisabled,
    disabledClassName,
    enabledClassName,
    tabIndex,
    elemRef
  }) => {
    const classes = cx(
      'Button',
      `Button--${variant}`,
      {
        [disabledClassName]: isDisabled,
        [enabledClassName]: !isDisabled
      },
      className
    );

    const buttonText = (variant, text) =>
      variant === 'primary' ? (
        <Text className="text-bold color-white" size="cta">
          {text}
        </Text>
      ) : (
        text
      );

    if (to) {
      if (linkIsExternal) {
        return (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            title={anchorTitle}
            tabIndex={tabIndex}
            ref={elemRef}
          >
            <div className={classes}>{text ? text : children}</div>
          </a>
        );
      } else {
        return (
          <Link
            to={to}
            aria-label={ariaLabel}
            title={anchorTitle}
            tabIndex={tabIndex}
            ref={elemRef}
          >
            <div className={classes}>{text ? text : children}</div>
          </Link>
        );
      }
    }

    return (
      <button
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        type={type}
        tabIndex={tabIndex}
        ref={elemRef}
      >
        {text ? buttonText(variant, text) : children}
      </button>
    );
  }
);

export default Button;
