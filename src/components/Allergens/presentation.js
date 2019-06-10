import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { Text, Button, Icon } from 'components';

const Allergens = React.memo(
  ({
    allergens,
    userAllergens,
    handleAllergenClick,
    localesContext,
    brandContext
  }) => (
    <div className="Allergens bg-color-white-wash radius-md p1">
      <Text size="cta" className="text-bold">
        {localesContext.Language.t('allergens.title')}
      </Text>
      <div className="Allergens__buttons flex flex-col pt1 px1">
        {Object.values(allergens).map(allergen => {
          const { id, name } = allergen;
          const allergenIsActive =
            !!userAllergens && userAllergens.includes(name);

          return (
            <Button
              key={id}
              className={cx(
                'flex justify-between items-center capitalize my_5 text-semibold',
                allergenIsActive
                  ? 'color-error'
                  : 'color-gray hover-color-gray-dark'
              )}
              onClick={() => handleAllergenClick(name)}
            >
              <Text size="description">{name}</Text>
              <Icon
                variant="small"
                icon={allergenIsActive ? 'Error' : 'Check'}
                fill={
                  allergenIsActive
                    ? get(brandContext, 'colors.error')
                    : get(brandContext, 'colors.gray')
                }
              />
            </Button>
          );
        })}
      </div>
    </div>
  )
);

export default Allergens;
