import React from 'react';

import { Text } from 'components';
import { RewardItem } from 'components';
import { withBrand } from 'config';

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
      {rewards.map((reward, index) => (
        <RewardItem
          key={index}
          reward={reward}
          LocalesProvider={LocalesProvider}
        />
      ))}
    </div>
  );
});

export default Rewards;
