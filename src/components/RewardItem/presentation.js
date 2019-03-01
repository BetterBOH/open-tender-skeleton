import React from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Card, Text } from 'components';
import withBrand from 'lib/withBrand';

const gray = get(withBrand, 'brand.colors.gray');

const RewardItem = React.memo(props => {
  const { reward, Language } = props;
  const nameOfReward = get(reward, 'name');
  let text;
  if (reward.spend_type === 'Dollars') {
    text = `
      ${Language.t('reward.spendAnother')}
      ${currency((reward.threshold - reward.spend_current).toFixed(2), {
        formatWithSymbol: true
      }).format()}
      ${Language.t('reward.toEarn')}
      ${currency(reward.credit_amount, { formatWithSymbol: true }).format()}
      ${Language.t('reward.inCredit')}.
    `;
  } else if (reward.spend_type === 'Frequency') {
    text = `
      ${reward.threshold - reward.orders_current}
      ${Language.t('reward.moreOrders')}
      ${currency(reward.credit_amount, { formatWithSymbol: true }).format()}
      ${Language.t('reward.discount')}.`;
  } else {
    return null;
  }
  return (
    <Card className="Rewards__row mt1 px1_5 py_5">
      <div className="flex justify-between items-center pt1 pl1 pr_5">
        {!!nameOfReward ? (
          <Text className="color-gray-dark letter-spacing-md bold">
            {nameOfReward}
          </Text>
        ) : null}
      </div>
      <div className="flex justify-between items-center py1 pl1 pr_5">
        <Text className="color-gray letter-spacing-md">{text}</Text>
      </div>
    </Card>
  );
});

export default RewardItem;
