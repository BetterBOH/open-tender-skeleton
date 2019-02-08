import React from 'react';
import Select from 'react-select';

const Dropdown = React.memo(({ value, options, onChange }) => {
  return (
    // TO-DO: Add presentation styles
    <Select options={options} value={value} onChange={onChange} />
  );
});

export default Dropdown;
