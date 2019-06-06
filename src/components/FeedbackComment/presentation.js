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
      <div className="flex flex-col items-center justify-between vh100 p1">
        <div className="col-12 text-center">
          <Text size="headline" className="block my1">
            {Language.t('feedback.comment.headline')}
          </Text>
          <Text size="description" className="block color-gray-dark">
            {Language.t('feedback.comment.description')}
          </Text>
          <Text size="label-detail" className="block color-gray-dark mt_5">
            {Language.t('feedback.comment.adlib')}
          </Text>
          <Card className="my2">
            <TextArea
              name="comment"
              className="Text--size-description color-gray-dark border-color-white m1"
              value={comment}
              onChange={handleTextAreaChange}
              placeholder={Language.t('feedback.comment.placeholder')}
            />
          </Card>
        </div>
        <div className="col-12 flex justify-center px1">
          <ConfirmButtons
            handleConfirm={handleSubmit}
            confirmButtonText={Language.t('feedback.submit')}
            handleCancel={onClose}
            cancelButtonIcon="Close"
          />
        </div>
      </div>
    );
  }
);

export default FeedbackComment;
