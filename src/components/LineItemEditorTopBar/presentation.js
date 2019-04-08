import React from 'react';
import cx from 'classnames';
import { Text, Button, Icon } from 'components';

const LineItemEditorTopBar = React.memo(
  ({ title, price, calories, isActive, onClose, localesContext }) => {
    return (
      <div
        className={cx('LineItemEditorTopBar', {
          'LineItemEditorTopBar--active': isActive
        })}
      >
        <div className="LineItemEditorTopBar__inner p1">
          <Text size="detail">{title}</Text>
          <Text size="detail">{price}</Text>
          <Text size="detail">{calories}</Text>
        </div>
        <Button onClick={onClose}>
          <Icon icon="Close" />
        </Button>
      </div>
    );
  }
);

export default LineItemEditorTopBar;
