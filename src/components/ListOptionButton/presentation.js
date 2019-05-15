import React from 'react';
import get from 'utils/get';
import { Text, Button, Icon } from 'components';

const ListOptionButton = React.memo(
  ({ icon, text, label, onClick, ariaLabel, anchorTitle, brandContext }) => {
    return (
      <Button
        className="w100 flex justify-start items-center px1 py_5"
        variant="list-option"
        onClick={onClick}
        ariaLabel={ariaLabel}
        anchorTitle={anchorTitle}
      >
        {!!icon && (
          <span className="Icon--with-bubble bg-color-gray-light p_5 mr1">
            <Icon
              variant="small"
              icon={icon}
              fill={get(brandContext, 'colors.white')}
            />
          </span>
        )}
        <div className="flex flex-col text-left">
          <Text className="color-gray bold nowrap" size="detail">
            {text}
          </Text>
          {!!label && (
            <Text className="color-gray-light nowrap" size="detail">
              {label}
            </Text>
          )}
        </div>
      </Button>
    );
  }
);

export default ListOptionButton;
