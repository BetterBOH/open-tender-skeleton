import React from 'react';
import cx from 'classnames';
import { Button, Icon } from 'components';

const BackButton = React.memo(props => {
  const { className, onClick, icon } = props;

  return (
    <Button
      className={cx('BackButton bg-color-black circle relative', className)}
      onClick={onClick}
    >
      <div className="BackButton__icon center">
        <Icon icon={icon} fill="white" />
      </div>
    </Button>
  );
});

export default BackButton;
