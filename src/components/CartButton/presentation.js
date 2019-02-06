import React from 'react';
import cx from 'classnames';
import { Button, Icon } from 'components';

const CartButton = React.memo(props => {
  const { className, onClick, icon } = props;

  return (
    <Button
      className={cx('CartButton bg-color-gray circle', className)}
      onClick={onClick}
    >
      <div className="CartButton__icon center">
        <Icon icon={icon} fill="white" />
      </div>
    </Button>
  );
});

export default CartButton;
