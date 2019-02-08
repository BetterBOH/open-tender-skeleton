import React from 'react';

const TextField = React.memo(({ type, value, onChange }) => (
  // TO-DO: Add presentation styles
  <input type={type} onChange={onChange} value={value} />
));

export default TextField;
