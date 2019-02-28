import React from 'react';
import get from 'utils/get';

import { Card, Text, Icon } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const RewardsRow = React.memo(props => {
  const { reward, Language } = props;
  const nameOfReward = get(reward, 'name');
  let text;
  if (reward.spend_type === 'Dollars') {
    text = `
      ${Language.t('reward.spendAnother')}
      ${Language.t('reward.currencySymbol')}${(
      reward.threshold - reward.spend_current
    ).toFixed(2)}
      ${Language.t('reward.toEarn')}
      ${Language.t('reward.currencySymbol')}${reward.credit_amount}
      ${Language.t('reward.inCredit')}.
    `;
  } else if (reward.spend_type === 'Frequency') {
    text = `
      ${reward.threshold - reward.orders_current}
      ${Language.t('reward.moreOrders')}
      ${Language.t('reward.currencySymbol')}${reward.credit_amount}
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

const Rewards = React.memo(props => {
  const { rewards, localesContext } = props;
  const { Language } = localesContext;
  return (
    <div className="Rewards bg-color-white-overlay">
      <div className="mb1 ml1">
        <Text size="cta" className="bold">
          {Language.t('reward.rewards')}
        </Text>
      </div>
      <div className="mb1 ml1">
        <Text className="color-gray-dark" size="cta">
          {Language.t('reward.thankYou')}
        </Text>
      </div>
      {rewards.map(reward => (
        <RewardsRow reward={reward} Language={Language} />
      ))}
    </div>
  );
});

export default Rewards;
