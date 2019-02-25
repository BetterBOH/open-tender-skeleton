import React from 'react';
import cx from 'classnames';

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
    renderOptions
  } = props;

  return (
    <div className={cx('SearchableDropdown relative', className)}>
      <TextField
        className="w100"
        variant="searchable-dropdown"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {value ? (
        <Button
          variant="icon-circle"
          className="SearchableDropdown__button bg-color-gray relative z-1"
          onClick={onClear}
        >
          <Icon icon="Close" fill="white" />
        </Button>
      ) : null}
      {options.length && renderOptions ? (
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
