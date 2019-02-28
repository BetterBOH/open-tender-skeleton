import React from 'react';

import { Text, Button, Rating } from 'components';

const FeedbackRating = React.memo(props => {
  const {
    rating,
    handleRatingClick,
    userDidSetRating,
    submitRating,
    localesContext
  } = props;
  const { Language } = localesContext;

  return (
    <div className="flex flex-col items-center justify-between vh100">
      <div className="text-center p1">
        <Text size="headline" className="block my1">
          {Language.t(
            `feedback.${userDidSetRating ? 'comment' : 'rating'}.headline`
          )}
        </Text>
        <Text size="description" className="block color-gray-dark">
          {Language.t(
            `feedback.${userDidSetRating ? 'comment' : 'rating'}.description`
          )}
        </Text>
        {userDidSetRating ? null : (
          <div className="w100 my2">
            <Rating
              isInteractive={true}
              rating={rating}
              onChange={handleRatingClick}
            />
          </div>
        )}
      </div>
      {userDidSetRating && (
        <div className="col-12">
          <Button
            className="col-12 mb1"
            variant="primary"
            text={Language.t('feedback.submit')}
            onClick={submitRating}
          />
        </div>
      )}
    </div>
  );
});

export default FeedbackRating;
