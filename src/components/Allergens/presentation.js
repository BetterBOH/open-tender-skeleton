import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { Text, LinkButton } from 'components';

const Allergens = React.memo(
  ({
    allergens,
    userAllergens,
    handleAllergenClick,
    localesContext,
    brandContext
  }) => (
    <div className="Allergens p1">
      <Text size="cta" className="text-bold mb1">
        {localesContext.Language.t('allergens.title')}
      </Text>
      <div className="p1">
        {Object.values(allergens).map(allergen => {
          const { id, name } = allergen;
          const allergenIsActive =
            !!userAllergens && userAllergens.includes(name);

          return (
            <LinkButton
              key={id}
              className={cx(
                'capitalize my_5 text-semibold',
                allergenIsActive ? 'color-error' : 'color-gray-dark'
              )}
              variant="list"
              onClick={() => handleAllergenClick(name)}
              iconRight={allergenIsActive ? 'Error' : 'Check'}
              iconRightFill={
                allergenIsActive
                  ? get(brandContext, 'colors.error')
                  : get(brandContext, 'colors.gray')
              }
            >
              <Text size="description">{name}</Text>
            </LinkButton>
          );
        })}
      </div>
    </div>
  )
);

export default Allergens;
