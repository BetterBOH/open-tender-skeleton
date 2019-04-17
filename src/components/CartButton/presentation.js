import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { Button, Icon, Text } from 'components';

const CartButton = React.memo(props => {
  const { className, onClick, icon, quantity, brandContext } = props;

  return (
    <Button
      className={cx('CartButton bg-color-black circle relative', className)}
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
