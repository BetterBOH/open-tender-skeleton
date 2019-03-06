import React from 'react';
import cx from 'classnames';
import { Button, Icon, Text } from 'components';

const CartButton = React.memo(props => {
  const { className, onClick, icon, quantity } = props;

  return (
    <Button
      className={cx('CartButton bg-color-black circle relative', className)}
      onClick={onClick}
    >
      <div className="CartButton__icon center">
        <Icon icon={icon} fill="white" />
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
