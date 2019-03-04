import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  added: PropTypes.string,
  favorite_item_id: PropTypes.number,
  is_orderable: PropTypes.bool,
  menu_item_id: PropTypes.number,
  menu_item_json: PropTypes.arrayOf(
    PropTypes.shape({
      groups: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          options: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number
            })
          )
        })
      ),
      id: PropTypes.number,
      instructions: PropTypes.string,
      made_for: PropTypes.string
    })
  ),
  menu_item_name: PropTypes.string,
  name: PropTypes.string,
  updated: PropTypes.string
});
const defaultProps = {};

export default { propTypes, defaultProps };
