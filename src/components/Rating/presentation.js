import React from 'react';
import get from 'utils/get';

import { Card, Button, Icon } from 'components';

import { defaultConfig } from 'config';
const grayLight = get(defaultConfig, "brand.colors['gray-light']");

const Rating = React.memo(
  ({ isInteractive, total, icon, rating, onChange }) => {
    const ratingNodes = Array.apply(null, Array(total)).map((value, index) => {
      const ratingIcon = (
        <Icon icon={icon} fill={rating > index ? 'gray' : grayLight} />
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

    return (
      <Card className="col-12">
        <div className="flex justify-center m1">{ratingNodes}</div>
      </Card>
    );
  }
);

export default Rating;
