import React from 'react';

import { Text, Rating } from 'components';

const FeedbackRating = React.memo(props => {
  const { rating, handleRatingClick, localesContext } = props;
  const { Language } = localesContext;

  return (
    <div className="flex flex-col items-center">
      <div className="text-center my2 px1">
        <Text size="headline" className="block my1">
          {Language.t('feedback.rating.headline')}
        </Text>
        <Text size="description" className="block color-gray-dark">
          {Language.t('feedback.rating.description')}
        </Text>
      </div>
      <Rating
        isInteractive={true}
        rating={rating}
        onChange={handleRatingClick}
      />
    </div>
  );
});

export default FeedbackRating;
