import React from 'react';
import { Text } from 'components';

const LoadableCheckbox = React.memo(
  ({ id, isLoading, isChecked, onClick, label }) => {
    return (
      <div className="LoadableCheckbox">
        {isLoading ? (
          <div className="flex">
            <div className={'LoadableCheckbox__loader relative'} />
            <Text className="LoadableCheckbox__text">{label}</Text>
          </div>
        ) : (
          <div>
            <input
              className="LoadableCheckbox__custom-checkbox opacity-0 absolute"
              type="checkbox"
              checked={isChecked}
              onChange={onClick}
              id={id}
            />
            <label className="p0 pointer relative" htmlFor={id}>
              {label}
            </label>
          </div>
        )}
      </div>
    );
  }
);

export default LoadableCheckbox;
