import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  c: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
    hour: PropTypes.number,
    minute: PropTypes.number,
    second: PropTypes.number,
    millisecond: PropTypes.number
  }),
  isLuxonDateTime: PropTypes.bool,
  o: PropTypes.number,
  ts: PropTypes.number,
  weekData: PropTypes.shape({
    weekYear: PropTypes.number,
    weekNumber: PropTypes.number,
    weekday: PropTypes.number,
    hour: PropTypes.number,
    minute: PropTypes.number,
    second: PropTypes.number,
    millisecond: PropTypes.number
  })
});

const defaultProps = {};

export default { propTypes, defaultProps };
