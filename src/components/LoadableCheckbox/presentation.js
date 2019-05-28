import React, { Fragment } from 'react';
import cx from 'classnames';
import { Text } from 'components';

const LoadableCheckbox = React.memo(
  ({ id, className, isLoading, isChecked, onClick, label }) => {
    return (
      <div className={cx('LoadableCheckbox', className)}>
        {isLoading ? (
          <div className="flex">
            <div className={'LoadableCheckbox__loader relative'} />
            <Text className="LoadableCheckbox__text">{label}</Text>
          </div>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </div>
    );
  }
);

export default LoadableCheckbox;
