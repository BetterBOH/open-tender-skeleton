import React from 'react';
import { Text, Card, Rating, ConfirmButtons } from 'components';

const FeedbackRating = React.memo(props => {
  const {
    rating,
    handleRatingClick,
    handleSetRating,
    confirmButtonIsDisabled,
    handleClearRating,
    localesContext
  } = props;

  const { Language } = localesContext;

  return (
    <div className="flex flex-col items-center justify-between vh100 p1">
      <div className="col-12 text-center">
        <Text size="headline" className="block my1">
          {Language.t('feedback.rating.headline')}
        </Text>
        <Text size="description" className="block color-gray-dark">
          {Language.t('feedback.rating.description')}
        </Text>
        <Card className="my2">
          <Rating
            isInteractive={true}
            rating={rating}
            onChange={handleRatingClick}
          />
        </Card>
      </div>
      <div className="col-12 flex justify-center px1">
        <ConfirmButtons
          confirmButtonIsDisabled={confirmButtonIsDisabled}
          handleConfirm={handleSetRating}
          handleCancel={handleClearRating}
        />
      </div>
    </div>
  );
});

export default FeedbackRating;
