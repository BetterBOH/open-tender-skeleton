import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import {
  Image,
  Text,
  Button,
  Icon,
  QuantitySpinner,
  FavoriteButton
} from 'components';

const MenuItemMedium = React.memo(
  ({
    item,
    updateQuantity,
    quantity,
    allergenWarnings,
    userIsAuthenticated,
    favoriteId,
    localesContext,
    brandContext
  }) => {
    const itemHasAllergenWarnings = !!allergenWarnings.length;

    return (
      <div
        className="MenuItemMedium col-6 md:col-4 lg:col-2 pr1 mb2"
        key={item.name}
      >
        <Button
          className="w100 radius-md overflow-hidden aspect-square bg-color-gray-lighter hover-bg-color-gray-light"
          ariaLabel={`${localesContext.Language.t('menu.moreDetailsAbout')} ${
            item.name
          }`}
          onClick={() => updateQuantity(0, item.increment)}
        >
          {item.small_image_url && (
            <Image
              className={cx({ 'Image--blurred': itemHasAllergenWarnings })}
              src={item.small_image_url}
              isBg={true}
              isHero={true}
            />
          )}
          {itemHasAllergenWarnings && (
            <div className="flex justify-center items-center px1">
              <Text
                className="bg-color-error flex items-center radius-xl text-extra-bold letter-spacing-sm color-white uppercase px1 py_5 md:px_5 md:py_25"
                size="extra-small"
              >
                <Icon
                  className="AllergenWarning__icon mr_5"
                  icon="Error"
                  fill={get(brandContext, 'colors.white')}
                />
                {`${localesContext.Language.t(
                  'menu.allergen.contains'
                )} ${allergenWarnings.join(', ')}`}
              </Text>
            </div>
          )}
        </Button>
        <div className="py1">
          <Text size="detail" className="block text-bold">
            {item.name}
          </Text>
          <Text size="detail" className="block text-bold mb_5 color-gray-dark">
            ${item.price}
          </Text>
          <div className="flex items-center">
            {userIsAuthenticated && (
              <FavoriteButton
                item={item}
                itemIsFavorited={!!favoriteId}
                favoriteId={favoriteId}
              />
            )}
            {!!get(item, 'option_groups.length', 0) ? (
              <Button
                variant="secondary"
                className="bg-color-gray-dark hover-bg-color-black flex px1"
                onClick={() => updateQuantity(0, item.increment)}
              >
                <Text
                  size="extra-small"
                  className="color-white uppercase text-bold letter-spacing-sm"
                >
                  {localesContext.Language.t('menu.add')}
                </Text>
              </Button>
            ) : (
              <QuantitySpinner
                quantity={quantity}
                handleIncrement={newQuantity =>
                  updateQuantity(quantity, newQuantity)
                }
                handleDecrement={newQuantity =>
                  updateQuantity(quantity, newQuantity)
                }
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default MenuItemMedium;
