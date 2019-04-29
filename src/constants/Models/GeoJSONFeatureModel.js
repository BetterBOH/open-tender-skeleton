import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  address: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  context: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })
  ),
  geometry: PropTypes.shape({
    type: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number)
  }),
  id: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object,
  place_name: PropTypes.string,
  place_type: PropTypes.arrayOf(PropTypes.string),
  properties: PropTypes.object,
  relevance: PropTypes.number,
  text: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
});

const defaultProps = null;

export default {
  propTypes,
  defaultProps
};
