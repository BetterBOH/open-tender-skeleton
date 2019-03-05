import React from 'react';

import { FeedbackComment, FeedbackRating } from 'components';

const Feedback = React.memo(props => {
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

  return userDidSetRating ? (
    <FeedbackComment
      comment={comment}
      submitFeedback={handleSubmit}
      handleUnsetRating={handleUnsetRating}
      handleTextAreaChange={handleTextAreaChange}
      localesContext={localesContext}
    />
  ) : (
    <FeedbackRating
      rating={rating}
      handleRatingClick={handleRatingClick}
      confirmButtonIsDisabled={!rating}
      handleSetRating={handleSetRating}
      handleClearRating={handleClearRating}
      localesContext={localesContext}
    />
  );
});

export default Feedback;
