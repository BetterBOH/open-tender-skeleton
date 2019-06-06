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
  }) => {
    return (
      <div className="OrderFeedback__rating">
        <Card className={cx('col-12 text-center', { py1: !!comment })}>
          <Rating
            isInteractive={true}
            rating={rating}
            onChange={handleSetRating}
          />
          {!!comment && (
            <Text size="detail" className="color-gray-dark">
              {comment}
            </Text>
          )}
        </Card>
        {!!rating && (
          <div className="OrderFeedback__comment-button-container flex justify-center">
            <Button
              variant="secondary"
              className="inline-flex items-center px1_5 py_5 mt1 radius-xl bg-color-gray-lighter hover-bg-color-gray-light"
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
                  `orderSummary.${
                    !!comment ? 'updateComment' : 'leaveAComment'
                  }`
                )}
              </Text>
            </Button>
          </div>
        )}
      </div>
    );
  }
);

export default OrderFeedback;
