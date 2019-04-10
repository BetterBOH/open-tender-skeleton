import React from 'react';

import { Card, Button } from 'components';

const Dropdown = React.memo(({ onClose, children, dropdownIsActive }) => {
  if (!dropdownIsActive) return null;

  return (
    <div className="Dropdown">
      <Card className="Dropdown__inner relative z1">{children}</Card>
      <Button
        variant="no-style"
        className="fixed t0 l0 r0 b0 col-12 h100 z0"
        onClick={onClose}
      />
    </div>
  );
});

export default Dropdown;
