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
        {Object.values(allergens).map(({ id, name }) => {
          const allergenIsActive =
            !!userAllergens && userAllergens.includes(name);

          return (
            <LinkButton
              key={id}
              text={name}
              className={cx('capitalize', {
                'color-error': allergenIsActive
              })}
              variant="list"
              onClick={() => handleAllergenClick(id)}
              iconRight={allergenIsActive ? 'Hazard' : 'Check'}
              iconRightColor={
                allergenIsActive
                  ? get(brandContext, 'colors.success')
                  : get(brandContext, 'colors.gray')
              }
            />
          );
        })}
      </div>
    </div>
  )
);

export default Allergens;
