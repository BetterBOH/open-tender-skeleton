import React from 'react';
import get from 'utils/get';
import { Text, Button, Icon } from 'components';

const ListOptionButton = React.memo(
  ({ icon, text, label, onClick, to, ariaLabel, brandContext }) => {
    return (
      <Button
        className="flex justify-start items-center px1 py_5"
        variant="list-option"
        onClick={onClick}
        to={to}
        ariaLabel={ariaLabel}
      >
        {!!icon && (
          <span className="Icon--with-bubble bg-color-gray-dark p_5 mr1">
            <Icon
              variant="small"
              icon={icon}
              fill={get(brandContext, 'colors.white')}
            />
          </span>
        )}
        <div className="flex flex-col">
          <Text className="color-gray-dark bold nowrap" size="detail">
            {text}
          </Text>
          {!!label && (
            <Text className="color-gray nowrap" size="detail">
              {label}
            </Text>
          )}
        </div>
      </Button>
    );
  }
);

export default ListOptionButton;
