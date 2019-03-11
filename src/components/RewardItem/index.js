import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import currency from 'currency.js';

import RewardModel from 'constants/Models/RewardModel';
import withLocales from 'lib/withLocales';

const RewardItem = React.memo(props => {
  const { reward, localesContext } = props;
  const { Language } = localesContext;
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

  return RegistryLoader({ text, reward }, 'components.RewardItem', () =>
    import('./presentation.js')
  );
});

RewardItem.propTypes = {
  reward: RewardModel.propTypes,
  text: PropTypes.string
};

RewardItem.defaultProps = {
  reward: null,
  text: ''
};

export default withLocales(RewardItem);
