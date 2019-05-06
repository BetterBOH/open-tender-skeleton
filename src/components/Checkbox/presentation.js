import React from 'react';
import { Text } from 'components';
const Checkbox = React.memo(({ id, loading, isChecked, onClick, label }) => {
  const renderInner = () => {
    if (loading) {
      return (
        <div className="Checkbox____loader-container flex flex-column">
          <div className={'Checkbox__loader'} />
          <Text className="Checkbox__text">{label}</Text>
        </div>
      );
    }

    return (
      <div>
        <input
          className="styled-checkbox"
          type="checkbox"
          checked={isChecked}
          onClick={onClick}
          id={id}
        />
        <label for={id}>{label}</label>
      </div>
    );
  };

  return <div className="Checkbox">{renderInner()}</div>;
});

export default Checkbox;
