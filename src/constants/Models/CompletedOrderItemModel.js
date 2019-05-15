import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  total_price: PropTypes.number,
  instructions: PropTypes.string,
  made_for: PropTypes.string,
  option_groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      option_items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number
        })
      )
    })
  ),
  allergens: PropTypes.string,
  app_image: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.string,
  large_image: PropTypes.string,
  nutritional_info: PropTypes.shape({
    calories: PropTypes.number,
    cholesterol: PropTypes.number,
    dietary_fiber: PropTypes.number,
    protein: PropTypes.number,
    saturated_fat: PropTypes.number,
    sodium: PropTypes.number,
    sugars: PropTypes.number,
    total_carbs: PropTypes.number,
    total_fat: PropTypes.number,
    trans_fat: PropTypes.number
  }),
  plu: PropTypes.string,
  short_description: PropTypes.string,
  short_name: PropTypes.string,
  shorthand: PropTypes.string,
  small_image: PropTypes.string,
  tags: PropTypes.string,
  temperature: PropTypes.string
});

const defaultProps = null;

export default { propTypes, defaultProps };
