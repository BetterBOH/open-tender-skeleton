import React from 'react';
import { Text } from 'components';
const LoadableCheckbox = React.memo(
  ({ id, loading, isChecked, onClick, label }) => {
    const renderInner = () => {
      if (loading) {
        return (
          <div className="flex">
            <div className={'LoadableCheckbox__loader'} />
            <Text className="LoadableCheckbox__text">{label}</Text>
          </div>
        );
      }

      return (
        <div>
          <input
            className="LoadableCheckbox__custom-checkbox"
            type="checkbox"
            checked={isChecked}
            onClick={onClick}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
      );
    };

    return <div className="LoadableCheckbox">{renderInner()}</div>;
  }
);

export default LoadableCheckbox;
