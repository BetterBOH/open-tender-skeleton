import React from 'react';
import get from 'utils/get';
import PossibleAllergens from 'constants/Allergens';
import { Text, LinkButton } from 'components';

const Allergens = React.memo(
  ({ userAllergens, handleAllergenClick, localesContext, brandContext }) => (
    <div className="Allergens p1">
      <Text size="cta" className="text-bold mb1">
        {localesContext.Language.t('allergens.title')}
      </Text>
      <div className="p1">
        {PossibleAllergens.map(allergen => (
          <LinkButton
            key={allergen}
            value={allergen}
            onClick={handleAllergenClick}
            iconRight="Check"
            iconRightColor={
              userAllergens.includes(allergen)
                ? get(brandContext, 'colors.success')
                : get(brandContext, 'colors.gray')
            }
          />
        ))}
      </div>
    </div>
  )
);

export default Allergens;
