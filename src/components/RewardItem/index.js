import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import RewardModel from 'constants/Models/RewardModel';
import withLocales from 'lib/withLocales';

const RewardItem = React.memo(props =>
  RegistryLoader(props, 'components.RewardItem', () =>
    import('./presentation.js')
  )
);

RewardItem.propTypes = {
  reward: RewardModel.propTypes
};

RewardItem.defaultProps = {
  reward: null
};

export { RewardItem };
export default withLocales(RewardItem);
