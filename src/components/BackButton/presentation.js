import React from 'react';
import cx from 'classnames';
import get from 'utils/get';
import { Button, Icon } from 'components';

const BackButton = React.memo(props => {
  const { className, onClick, icon, brandContext } = props;

  return (
    <Button
      className={cx('BackButton bg-color-black circle relative', className)}
      onClick={onClick}
    >
      <div className="BackButton__icon center">
        <Icon icon={icon} fill={get(brandContext, 'colors.white')} />
      </div>
    </Button>
  );
});

export default BackButton;
