import React from 'react';
import get from 'utils/get';
import cx from 'classnames';
import { Rating, Button, Icon, Text, Card } from 'components';

const OrderFeedback = React.memo(
  ({
    rating,
    comment,
    handleSetRating,
    handleClickLeaveComment,
    localesContext,
    brandContext
  }) => (
    <Card
      className={cx(
        'OrderFeedback col-12 flex flex-col justify-center items-center py1',
        {
          py1: !!comment
        }
      )}
    >
      <Rating isInteractive={true} rating={rating} onChange={handleSetRating} />
      {!!comment && (
        <Text size="detail" className="color-gray-dark">
          {comment}
        </Text>
      )}
      {!!rating && (
        <div className="OrderFeedback__comment-button-container">
          <Button
            variant="secondary"
            className="OrderFeedback__comment-button inline-flex items-center px1_5 py_5 my1 radius-xl bg-color-gray-lighter hover-bg-color-gray-light"
            onClick={handleClickLeaveComment}
          >
            <Icon
              icon="Bubbles"
              fill={get(brandContext, 'colors[gray-dark]')}
              variant="small"
            />
            <Text
              size="extra-small"
              className="color-gray-dark uppercase text-extra-bold letter-spacing-md ml1"
            >
              {localesContext.Language.t(
                `orderSummary.${!!comment ? 'updateComment' : 'leaveAComment'}`
              )}
            </Text>
          </Button>
        </div>
      )}
    </Card>
  )
);

export default OrderFeedback;
