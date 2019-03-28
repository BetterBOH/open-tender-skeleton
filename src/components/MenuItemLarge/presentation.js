import React from 'react';
import cx from 'classnames';
import {
  Image,
  Text,
  Button,
  Icon,
  QuantitySpinner,
  FavoriteButton
} from 'components';
import get from 'utils/get';

const MenuItemLarge = React.memo(
  ({
    item,
    updateQuantity,
    allergenWarnings,
    localesContext,
    userIsAuthenticated
  }) => {
    const itemHasAllergenWarnings = !!allergenWarnings.length;

    return (
      <div
        className="MenuItemLarge col-12 md:col-4 lg:col-3 md:pr1_5 mb2"
        key={item.name}
      >
        <div className="w100 radius-md overflow-hidden bg-color-gray-light aspect-landscape mb1">
          {item.small_image_url && (
            <Image
              className={cx({ 'Image--blurred': itemHasAllergenWarnings })}
              src={item.small_image_url}
              isBg={true}
            />
          )}
          {itemHasAllergenWarnings && (
            <div className="flex justify-center items-center">
              <Text
                className="bg-color-brand-color-light flex items-center radius-xl text-extrabold letter-spacing-sm color-white uppercase px1 py_5 md:px_5 md:py_25"
                size="detail"
              >
                <Icon
                  className="AllergenWarning__icon mr_5"
                  icon="Error"
                  fill="white"
                />
                {`${localesContext.Language.t(
                  'menu.allergen.contains'
                )} ${allergenWarnings.join(', ')}`}
              </Text>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-between">
          <div>
            <Text size="detail" className="block text-bold mb_25">
              {item.name}
            </Text>
            <Text
              size="detail"
              className="block text-bold mb_5 color-gray-dark"
            >
              ${item.price}
            </Text>
          </div>
          <span>
            <QuantitySpinner
              quantity={item.quantity || 0}
              handleIncrement={quantity =>
                updateQuantity(item.quantity, quantity)
              }
              handleDecrement={quantity =>
                updateQuantity(item.quantity, quantity)
              }
            />
          </span>
        </div>
        <div className="mb1 pr_5">
          <Text size="detail" className="block color-gray-dark">
            {item.description}
          </Text>
        </div>
        <div className="flex items-start">
          {userIsAuthenticated ? (
            <FavoriteButton
              itemIsFavorited={get(item, 'itemIsFavorited')}
              menuItemId={get(item, 'id')}
              item={item}
              favoriteId={get(item, 'favoriteId')}
            />
          ) : null}
          <Button variant="secondary" className="bg-color-gray-light px2">
            <Text
              size="extrasmall"
              className="color-gray-dark uppercase text-bold letter-spacing-sm"
            >
              {localesContext.Language.t('menu.customize')}
            </Text>
          </Button>
        </div>
      </div>
    );
  }
);

export default MenuItemLarge;
