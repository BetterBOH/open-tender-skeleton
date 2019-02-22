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
    placeholder
  } = props;

  return (
    // TO-DO: Add presentation styles
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
      {options.length ? (
        <ul>
          {options.map(option => (
            <li>
              <Button onClick={() => onSelect(option.value)}>
                {option.label}
              </Button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
});

export default SearchableDropdown;
