import React from 'react';
import { Card, Allergens } from 'components';

const FilterModal = React.memo(
  ({ onClose, userAllergens, allergens, handleAllergenClick }) => (
    <div className="FilterModal z5 col-12 md:col-6 lg:col-3 p1">
      <Card variant="filter">
        <Allergens
          allergens={allergens}
          userAllergens={userAllergens}
          handleAllergenClick={handleAllergenClick}
        />
      </Card>
    </div>
  )
);

export default FilterModal;
