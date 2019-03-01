import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import RewardModel from 'constants/Models/RewardModel';
import withLocales from 'lib/withLocales';

const defaultReward = null;
const RewardItem = React.memo(props =>
  RegistryLoader(props, 'components.RewardItem', () =>
    import('./presentation.js')
  )
);

RewardItem.propTypes = {
  reward: RewardModel.propTypes
};

RewardItem.defaultProps = {
  reward: defaultReward
};

export { RewardItem };
export default withLocales(RewardItem);
