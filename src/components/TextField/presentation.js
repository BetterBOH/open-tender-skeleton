import React, { Fragment, PureComponent, createRef } from 'react';
import cx from 'classnames';
import { Text, Icon, TextFieldError } from 'components';

class TextField extends PureComponent {
  constructor() {
    super(...arguments);

    this.inputRef = createRef();
  }

  componentDidMount() {
    if (this.props.focusOnMount) this.inputRef.current.focus();
  }

  render() {
    const {
      type,
      autoComplete,
      value,
      variant,
      className,
      placeholder,
      label,
      ariaLabel,
      iconLeft,
      isDisabled,
      onFocus,
      onBlur,
      onChange,
      errors
    } = this.props;

    return (
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
                'TextField py_5 w100 radius-sm bg-color-gray-lighter',
                `TextField--${variant}`,
                iconLeft ? 'pl3 pr1' : 'px1',
                {
                  'TextField--has-errors': !!errors && errors.length
                },
                className
              )}
              id={label}
              aria-label={ariaLabel}
              type={type}
              autoComplete={autoComplete}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
              disabled={isDisabled}
              ref={this.inputRef}
            />
          </div>
          {!!errors && <TextFieldError errors={errors} />}
        </div>
      </Fragment>
    );
  }
}

export default TextField;
