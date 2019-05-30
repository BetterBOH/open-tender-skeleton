import React from 'react';
import cx from 'classnames';
import get from 'utils/get';

import { TextField, Icon, Button } from 'components';

const SearchableDropdown = React.memo(props => {
  const {
    value,
    onChange,
    onSelect,
    onClear,
    options,
    className,
    placeholder,
    errors,
    renderOptions,
    brandContext,
    localesContext
  } = props;

  return (
    <div className={cx('SearchableDropdown relative', className)}>
      <TextField
        iconLeft="Location"
        className="px3"
        variant="searchable-dropdown"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        ariaLabel={localesContext.Language.t('locations.enterYourAddress')}
        errors={errors}
      />
      {value && (
        <Button
          variant="icon-circle"
          className="SearchableDropdown__clear-button bg-color-gray relative"
          onClick={onClear}
        >
          <Icon icon="Close" fill={get(brandContext, 'colors.white')} />
        </Button>
      )}
      {renderOptions && options.length ? (
        <div className="SearchableDropdown__results">
          <ul>
            {options.map((option, i) => {
              const key = option.value || i;

              return (
                <li key={key}>
                  <Button onClick={() => onSelect(key)}>{option.label}</Button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
});

export default SearchableDropdown;
