import React from 'react';

import { Card } from 'components';

const Dropdown = React.memo(({ children, dropdownIsActive, dropdownRef }) => {
  if (!dropdownIsActive) return null;

  return (
    <div className="Dropdown" ref={dropdownRef}>
      <Card className="Dropdown__inner relative z1">{children}</Card>
    </div>
  );
});

export default Dropdown;
