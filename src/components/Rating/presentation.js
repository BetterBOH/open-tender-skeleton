import React from 'react';
import get from 'utils/get';
import { Button, Icon } from 'components';

const Rating = React.memo(
  ({ isInteractive, total, icon, rating, onChange, brandContext }) => {
    const ratingNodes = Array.apply(null, Array(total)).map((value, index) => {
      const ratingIcon = (
        <Icon
          icon={icon}
          fill={
            rating > index
              ? get(brandContext, 'colors[gray-dark]')
              : get(brandContext, 'colors[gray-light]')
          }
        />
      );

      const ratingValue = index + 1;
      const id = `${icon}-${ratingValue}`;

      if (isInteractive) {
        return (
          <span id={id} key={id} className="mx_5">
            <Button onClick={() => onChange(ratingValue)}>{ratingIcon}</Button>
          </span>
        );
      }

      return (
        <span id={id} key={id} className="mx_5">
          {ratingIcon}
        </span>
      );
    });

    return <div className="flex justify-center m1">{ratingNodes}</div>;
  }
);

export default Rating;
