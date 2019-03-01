import React from 'react';

import { Text, Button, Card, Icon, Rating } from 'components';

const FeedbackRating = React.memo(props => {
  const {
    userDidSetRating,
    rating,
    comment,
    handleRatingClick,
    handleSetRating,
    handleUnsetRating,
    handleClearRating,
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
        {userDidSetRating && (
          <Text size="label-detail" className="block color-gray-dark mt_5">
            {Language.t('feedback.comment.adlib')}
          </Text>
        )}
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
      {userDidSetRating ? (
        <div className="col-12 flex justify-center px1">
          <Button
            className="col-10 md:col-11 bg-color-black"
            variant="primary"
            text={Language.t('feedback.submit')}
            onClick={handleSubmit}
          />
          <Button
            variant="primary-round"
            className="col-2 md:col-1 bg-color-gray ml_5"
            onClick={handleUnsetRating}
          >
            <div className="Button--primary-round--icon ml1_25">
              <Icon fill="white" icon="Back" />
            </div>
          </Button>
        </div>
      ) : (
        <div className="col-12 flex justify-center px1">
          <Button
            isDisabled={!rating}
            disabledClassName="disabled bg-color-gray-dark"
            className="col-10 md:col-11 bg-color-black"
            variant="primary"
            text={Language.t('feedback.continue')}
            onClick={handleSetRating}
          />
          <Button
            variant="primary-round"
            className="col-2 md:col-1 bg-color-gray ml_5"
            onClick={handleClearRating}
          >
            <div className="Button--primary-round--icon mxauto">
              <Icon fill="white" icon="Close" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
});

export default FeedbackRating;
