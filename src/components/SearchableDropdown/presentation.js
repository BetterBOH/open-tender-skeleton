import React from 'react';
import { TextField, Icon, Button, Dropdown } from 'components';

const SearchableDropdown = React.memo(props => {
  const { value, onChange, onSelect, onClear, options } = props;

  return (
    // TO-DO: Add presentation styles
    <div className="SearchableDropdown">
      <TextField onChange={onChange} value={value} />
      <Button variant="no-style" onClick={onClear}>
        <Icon icon="Close" />
      </Button>
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
