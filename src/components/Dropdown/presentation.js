import React from 'react';

import { Card } from 'components';

const Dropdown = React.memo(({ children, dropdownIsActive, dropdownRef }) => {
  if (!dropdownIsActive) return null;

  return (
    <div className="Dropdown relative z2" ref={dropdownRef}>
      <Card className="Dropdown__inner">{children}</Card>
    </div>
  );
});

export default Dropdown;
