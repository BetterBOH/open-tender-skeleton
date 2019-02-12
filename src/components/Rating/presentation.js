import React from 'react';

import { Card, Button, Icon } from 'components';

const Rating = ({ isInteractive, total, icon, rating, onChange }) => {
  const ratingNodes = Array.apply(null, Array(total)).map((value, index) => {
    const ratingIcon = (
      <Icon
        icon={icon}
        // temporary hex codes as color variables are currently different in storybook
        fill={rating > index ? '#8d92a3' : '#CDCDD7'}
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

  return (
    <Card className="justify-center md:col-4">
      <div className="flex justify-center m1">{ratingNodes}</div>
    </Card>
  );
};

export default Rating;
