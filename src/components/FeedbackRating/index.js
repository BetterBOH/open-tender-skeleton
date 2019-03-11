import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

const FeedbackRating = React.memo(props =>
  RegistryLoader(props, 'components.FeedbackRating', () =>
    import('./presentation.js')
  )
);

FeedbackRating.propTypes = {
  rating: PropTypes.number,
  handleRatingClick: PropTypes.func,
  handleSetRating: PropTypes.func,
  confirmButtonIsDisabled: PropTypes.bool,
  handleClearRating: PropTypes.func
};

FeedbackRating.defaultProps = {
  rating: 0,
  handleRatingClick: f => f,
  handleSetRating: f => f,
  confirmButtonIsDisabled: true,
  handleClearRating: f => f
};

export default withLocales(FeedbackRating);
