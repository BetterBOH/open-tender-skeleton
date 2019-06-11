import React, { Suspense } from 'react';
import { Card, Spinner } from 'components';

const Dropdown = React.memo(({ children, dropdownIsActive, dropdownRef }) => {
  if (!dropdownIsActive) return null;

  return (
    <div className="Dropdown relative z2" ref={dropdownRef}>
      <Card className="Dropdown__inner">
        <Suspense
          fallback={
            <Suspense fallback={null}>
              <Spinner />
            </Suspense>
          }
        >
          {children}
        </Suspense>
      </Card>
    </div>
  );
});

export default Dropdown;
