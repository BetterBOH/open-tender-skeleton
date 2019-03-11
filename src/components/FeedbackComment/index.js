import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

const FeedbackComment = React.memo(props =>
  RegistryLoader(props, 'components.FeedbackComment', () =>
    import('./presentation.js')
  )
);

FeedbackComment.propTypes = {
  comment: PropTypes.string,
  submitFeedback: PropTypes.func,
  handleUnsetRating: PropTypes.func,
  handleTextAreaChange: PropTypes.func
};

FeedbackComment.defaultProps = {
  comment: '',
  submitFeedback: f => f,
  handleUnsetRating: f => f,
  handleTextAreaChange: f => f
};

export default withLocales(FeedbackComment);
