import React, { Fragment } from 'react';
import cx from 'classnames';
import { Text, Icon } from 'components';

const TextFieldError = React.memo(({ errors }) => {
  if (!errors.length) return null;

  const errorMessage = errors.reduce((allErrors, error) => {
    const lastCharacterIsAPeriod = error[error.length - 1] === '.';
    const editedError = lastCharacterIsAPeriod
      ? error.substring(0, error.length - 1)
      : error;
    if (allErrors.length === 0) {
      return editedError;
    }

    return `${allErrors}, ${editedError.toLowerCase()}`;
  }, '');

  return (
    <div>
      <Text
        className="TextField__error"
        size="detail"
      >{`${errorMessage}.`}</Text>
    </div>
  );
});

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
    onBlur,
    onChange,
    errors
  }) => (
    <Fragment>
      {!!label && (
        <div className="w100 text-left">
          <Text
            size="extrasmall"
            className="text-bold color-gray-dark letter-spacing-sm uppercase"
          >
            {label}
          </Text>
        </div>
      )}
      <div className="w100 flex justify-center items-center">
        {!!iconLeft && (
          <Icon
            icon={iconLeft}
            className="TextField__icon mr_5 color-gray-dark"
          />
        )}
        <input
          className={cx(
            'TextField p_5 w100',
            `TextField--${variant}`,
            className
          )}
          type={type}
          autoComplete={autoComplete}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>
      {!!errors && <TextFieldError errors={errors} />}
    </Fragment>
  )
);

export default TextField;
