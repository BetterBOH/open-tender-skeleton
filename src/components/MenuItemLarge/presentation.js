import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { FLAGS, isEnabled } from 'utils/featureFlags';
import {
  Image,
  Text,
  Button,
  Icon,
  QuantitySpinner,
  FavoriteButton
} from 'components';

const MenuItemLarge = React.memo(
  ({
    item,
    updateQuantity,
    allergenWarnings,
    userIsAuthenticated,
    localesContext,
    brandContext
  }) => {
    const itemHasAllergenWarnings = !!allergenWarnings.length;

    return (
      <div
        className="MenuItemLarge col-12 md:col-4 lg:col-3 md:pr1_5 mb2"
        key={item.name}
      >
        <Button
          className="w100 radius-md overflow-hidden bg-color-gray-lighter aspect-landscape mb1"
          onClick={f => f}
        >
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
                className="bg-color-error flex items-center radius-xl text-extrabold letter-spacing-sm color-white uppercase px1 py_5 md:px_5 md:py_25"
                size="detail"
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
        <div className="flex flex-wrap justify-between">
          <div>
            <Text size="detail" className="block text-bold mb_25">
              {item.name}
            </Text>
            <Text size="detail" className="block text-bold mb_5 color-gray">
              ${item.price}
            </Text>
          </div>
        </div>
        <div className="mb1 pr_5">
          <Text size="detail" className="block color-gray">
            {item.short_description}
          </Text>
        </div>
        <div className="flex items-start">
          {isEnabled(FLAGS.FAVORITING) &&
            userIsAuthenticated(
              <FavoriteButton
                itemIsFavorited={get(item, 'itemIsFavorited')}
                menuItemId={get(item, 'id')}
                item={item}
                favoriteId={get(item, 'favoriteId')}
              />
            )}
          {!!get(item, 'option_groups.length', 0) ? (
            <Button
              variant="secondary"
              className="bg-color-gray-lighter px2"
              onClick={() => updateQuantity(0, item.increment)}
            >
              <Text
                size="extrasmall"
                className="color-gray-dark uppercase text-bold letter-spacing-sm"
              >
                {localesContext.Language.t('menu.customize')}
              </Text>
            </Button>
          ) : (
            <QuantitySpinner
              quantity={item.quantity}
              handleIncrement={quantity =>
                updateQuantity(item.quantity, quantity)
              }
              handleDecrement={quantity =>
                updateQuantity(item.quantity, quantity)
              }
            />
          )}
        </div>
      </div>
    );
  }
);

export default MenuItemLarge;
