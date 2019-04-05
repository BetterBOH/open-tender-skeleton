import React from 'react';

import { Text } from 'components';
import { RewardItem } from 'components';

const Rewards = React.memo(props => {
  const { rewards, localesContext, LocalesProvider } = props;
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
        <RewardItem
          key={reward.description}
          reward={reward}
          LocalesProvider={LocalesProvider}
        />
      ))}
    </div>
  );
});

export default Rewards;
