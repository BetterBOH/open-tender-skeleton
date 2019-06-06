import React from 'react';
import { Text, Card, TextArea, ConfirmButtons } from 'components';

const FeedbackComment = React.memo(
  ({
    comment,
    handleSubmit,
    handleTextAreaChange,
    onClose,
    localesContext
  }) => {
    const { Language } = localesContext;

    return (
      <Card className="FeedbackComment col-11 md:col-6 py1">
        <div className="FeedbackComment__inner text-center mx1">
          <Text size="headline" className="block my1">
            {Language.t('feedback.comment.headline')}
          </Text>
          <Text size="description" className="block color-gray-dark">
            {Language.t('feedback.comment.description')}
          </Text>
          <Text size="label-detail" className="block color-gray-dark mt_5">
            {Language.t('feedback.comment.adlib')}
          </Text>
          <Card className="FeedbackComment__text-area-container mt2 mb1">
            <TextArea
              name="comment"
              className="Text--size-description color-gray-dark border-color-white m1"
              value={comment}
              onChange={handleTextAreaChange}
              placeholder={Language.t('feedback.comment.placeholder')}
            />
          </Card>
        </div>
        <ConfirmButtons
          handleConfirm={handleSubmit}
          confirmButtonText={Language.t('feedback.submit')}
          handleCancel={onClose}
          cancelButtonIcon="Close"
        />
      </Card>
    );
  }
);

export default FeedbackComment;
