import React from 'react';
import { Text, Card, Button, RewardItem } from 'components';
import get from 'utils/get';

const Rewards = React.memo(props => {
  const { rewards, localesContext } = props;
  const Language = get(localesContext, 'Language');

  return (
    <div className="Rewards">
      <div className="px1 mb_5">
        <Text size="cta" className="bold">
          {Language.t('reward.rewards')}
        </Text>
      </div>
      <div className="px1 mb1_5">
        <Text className="color-gray-dark" size="description">
          {Language.t('reward.thankYou')}
        </Text>
      </div>
      {rewards.length ? (
        <Card>
          {rewards.map(reward => (
            <RewardItem key={reward.description} reward={reward} />
          ))}
        </Card>
      ) : (
        <Card className="p1">
          {/* TO-DO: Connect rewards accounts flow (#303) */}
          <Text size="description" className="color-gray-dark mb1">
            {Language.t('reward.noRewards')}
          </Text>
          <Button
            variant="primary"
            className="bg-color-gray-dark"
            onClick={f => f}
          >
            <Text size="cta" className="color-white text-bold">
              {Language.t('reward.connectAccount')}
            </Text>
          </Button>
        </Card>
      )}
    </div>
  );
});

export default Rewards;
