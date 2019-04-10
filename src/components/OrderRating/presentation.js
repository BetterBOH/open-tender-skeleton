import React from 'react';

import { Rating } from 'components';

const OrderRating = React.memo(({ rating, handleSetRating }) => {
  return (
    <div className="OrderRating">
      <Rating isInteractive={true} rating={rating} onChange={handleSetRating} />
    </div>
  );
});

export default OrderRating;
