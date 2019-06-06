import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { Button, Icon, Text } from 'components';
import getRoutes from 'utils/getRoutes';

const RoutesWithoutCartButton = [
  getRoutes().LOGIN,
  getRoutes().SIGNUP,
  getRoutes().RESET,
  getRoutes().AUTH,
  getRoutes().CHECKOUT
];

const CartButton = React.memo(props => {
  const {
    className,
    onClick,
    icon,
    currentLineItems,
    location,
    brandContext
  } = props;
  const pathname = get(location, 'pathname');

  if (RoutesWithoutCartButton.includes(pathname)) return null;

  const quantity = currentLineItems
    ? currentLineItems.reduce((totalItems, lineItem) => {
        return (totalItems += get(lineItem, 'quantity', 0));
      }, 0)
    : 0;

  return (
    <Button
      className={cx(
        'CartButton relative circle bg-color-gray-dark hover-bg-color-black',
        className
      )}
      onClick={onClick}
    >
      <div className="CartButton__icon center">
        <Icon icon={icon} fill={get(brandContext, 'colors.white')} />
      </div>
      {!!quantity && (
        <div className="CartButton__quantity bg-color-brand-color-light circle absolute flex justify-center items-center">
          <Text size="description" className="color-white text-bold">
            {quantity}
          </Text>
        </div>
      )}
    </Button>
  );
});

export default CartButton;
