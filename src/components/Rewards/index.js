import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import RewardModel from 'constants/Models/RewardModel';

const Rewards = React.memo(props =>
  RegistryLoader(props, 'components.Rewards', () => import('./presentation.js'))
);

Rewards.propTypes = {
  rewards: PropTypes.arrayOf(RewardModel.propTypes)
};

Rewards.defaultProps = {
  rewards: []
};

export default Rewards;
