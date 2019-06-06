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
      <div className="FeedbackComment flex flex-col flex-wrap bg-color-gray-lighter col-12 md:col-6 justify-between py1">
        <div className="FeedbackComment__inner col-12 text-center">
          <Text size="headline" className="block my1">
            {Language.t('feedback.comment.headline')}
          </Text>
          <Text size="description" className="block color-gray-dark">
            {Language.t('feedback.comment.description')}
          </Text>
          <Text size="label-detail" className="block color-gray-dark mt_5 mb1">
            {Language.t('feedback.comment.adlib')}
          </Text>
          <Card className="FeedbackComment__text-area-container m1">
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
      </div>
    );
  }
);

export default FeedbackComment;
