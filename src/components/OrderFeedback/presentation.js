import React from 'react';
import get from 'utils/get';
import { Rating, Button, Icon, Text } from 'components';

const OrderFeedback = React.memo(
  ({
    rating,
    handleSetRating,
    handleClickLeaveComment,
    localesContext,
    brandContext
  }) => {
    return (
      <div className="OrderFeedback__rating">
        <Rating
          isInteractive={true}
          rating={rating}
          onChange={handleSetRating}
        />
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
              {localesContext.Language.t('orderSummary.leaveAComment')}
            </Text>
          </Button>
        </div>
      </div>
    );
  }
);

export default OrderFeedback;
