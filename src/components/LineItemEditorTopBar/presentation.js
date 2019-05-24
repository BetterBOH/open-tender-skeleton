import React from 'react';
import cx from 'classnames';
import { Text, Button, Icon, Image } from 'components';
import get from 'utils/get';
import getTotalLineItemPrice from 'utils/getTotalLineItemPrice';

const LineItemEditorTopBar = React.memo(
  ({ lineItem, isActive, onClose, localesContext }) => {
    const productData = get(lineItem, 'productData');
    const name = get(productData, 'name');
    const calories = get(productData, 'nutritional_info.calories');
    const image = get(productData, 'small_image_url');

    return (
      <div
        className={cx(
          'LineItemEditorTopBar flex justify-between items-center shadow-sm fixed t0 l0 bg-color-white col-12 z3 px1_5 md:px2 py1',
          {
            'LineItemEditorTopBar--active': isActive
          }
        )}
      >
        <div className="LineItemEditorTopBar__inner flex flex-wrap col-12">
          {image && (
            <div className="LineItemEditorTopBar__image radius-sm overflow-hidden mr1 aspect-square">
              <Image src={image} isBg={true} />
            </div>
          )}
          <div>
            <Text size="detail" className="text-bold block col-12">
              {name}
            </Text>
            <Text size="detail" className="mr_5 text-bold color-gray-dark">
              ${getTotalLineItemPrice(lineItem)}
            </Text>
            {!!calories && (
              <Text size="detail" className="color-gray-dark">
                {calories}{' '}
                {localesContext.Language.t('menu.nutritionFactUnits.cal')}
              </Text>
            )}
          </div>
        </div>
        <Button className="LineItemEditorTopBar__close" onClick={onClose}>
          <Icon icon="Close" />
        </Button>
      </div>
    );
  }
);

export default LineItemEditorTopBar;
