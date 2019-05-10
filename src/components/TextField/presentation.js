import React, { Fragment } from 'react';
import cx from 'classnames';
import { Text, Icon, TextFieldError } from 'components';

const TextField = React.memo(
  ({
    type,
    autoComplete,
    value,
    variant,
    className,
    placeholder,
    label,
    iconLeft,
    isDisabled,
    onFocus,
    onBlur,
    onChange,
    errors
  }) => (
    <Fragment>
      {!!label && (
        <div className="w100 text-left">
          <Text
            elem="label"
            htmlFor={label}
            size="extrasmall"
            className="text-bold color-gray-dark letter-spacing-sm uppercase"
          >
            {label}
          </Text>
        </div>
      )}
      <div className="w100 flex flex-wrap">
        <div className="w100 relative flex justify-center items-center">
          {!!iconLeft && (
            <Icon icon={iconLeft} className="TextField__icon absolute" />
          )}
          <input
            className={cx(
              'TextField py_5 w100 radius-sm',
              `TextField--${variant}`,
              iconLeft ? 'pl3 pr1' : 'px1',
              {
                'TextField--has-errors': !!errors && errors.length
              },
              className
            )}
            id={label}
            type={type}
            autoComplete={autoComplete}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={isDisabled}
          />
        </div>
        {!!errors && <TextFieldError errors={errors} />}
      </div>
    </Fragment>
  )
);

export default TextField;
