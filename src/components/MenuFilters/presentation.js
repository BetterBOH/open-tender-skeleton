import React from 'react';
import cx from 'classnames';
import { Card, Allergens } from 'components';

const MenuFilters = React.memo(
  ({
    userAllergens,
    allergens,
    handleAllergenClick,
    filterRef,
    drawerIsActive
  }) => (
    <div
      ref={filterRef}
      className={cx('MenuFilters z5 col-12 md:col-6 lg:col-3 p1', {
        drawerIsActive: 'absolute t0 r0'
      })}
    >
      <Card variant="filter" className="bg-color-white shadow-md">
        <Allergens
          allergens={allergens}
          userAllergens={userAllergens}
          handleAllergenClick={handleAllergenClick}
        />
      </Card>
    </div>
  )
);

export default MenuFilters;
