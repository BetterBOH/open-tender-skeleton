import React from 'react';

import { Text, Button, Card, Rating } from 'components';

const FeedbackRating = React.memo(props => {
  const {
    userDidSetRating,
    rating,
    comment,
    handleRatingClick,
    handleTextAreaChange,
    handleSubmit,
    localesContext
  } = props;
  const { Language } = localesContext;

  return (
    <div className="flex flex-col items-center justify-between vh100 p1">
      <div className="col-12 text-center">
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
        {userDidSetRating ? (
          <Card className="mt2">
            <textarea
              className="Text--size-description resize-none border-color-white color-gray-dark m1"
              rows={15}
              onChange={handleTextAreaChange}
              placeholder={Language.t('feedback.comment.placeholder')}
              value={comment}
              name="comment"
            />
          </Card>
        ) : (
          <div className="col-12 mt2">
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
            className="col-12"
            variant="primary"
            text={Language.t('feedback.submit')}
            onClick={handleSubmit}
          />
        </div>
      )}
    </div>
  );
});

export default FeedbackRating;
