import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  uuid: PropTypes.string,
  quantity: PropTypes.number,
  madeFor: PropTypes.string,
  instructions: PropTypes.string,
  isValid: PropTypes.bool,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      detail: PropTypes.string,
      status: PropTypes.number,
      title: PropTypes.string
    })
  ),
  productData: PropTypes.shape({
    allergen_classes: PropTypes.string,
    allergens: PropTypes.string,
    app_image_url: PropTypes.string,
    calories: PropTypes.number,
    category_id: PropTypes.number,
    category_name: PropTypes.string,
    delivery_days: PropTypes.number,
    description: PropTypes.string,
    display_options: PropTypes.number,
    end_date: PropTypes.string,
    end_date_str: PropTypes.string,
    height: PropTypes.number,
    id: PropTypes.number,
    increment: PropTypes.number,
    ingredients: PropTypes.string,
    large_image_url: PropTypes.string,
    length: PropTypes.number,
    max_quantity: PropTypes.number,
    menu_position: PropTypes.number,
    min_quantity: PropTypes.number,
    name: PropTypes.string,
    nutritional_info: PropTypes.shape({
      calories: PropTypes.number,
      cholesterol: PropTypes.number,
      dietary_fiber: PropTypes.number,
      protein: PropTypes.number,
      saturated_fat: PropTypes.number,
      serving_size: PropTypes.string,
      sodium: PropTypes.number,
      sugars: PropTypes.number,
      total_carbs: PropTypes.number,
      total_fat: PropTypes.number,
      trans_fat: PropTypes.number
    }),
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
    plu: PropTypes.string,
    price: PropTypes.string,
    sales_tax_override: PropTypes.bool,
    short_description: PropTypes.string,
    short_name: PropTypes.string,
    shorthand: PropTypes.string,
    sizes: PropTypes.arrayOf(PropTypes.string),
    slug: PropTypes.string,
    small_image_url: PropTypes.string,
    start_date: PropTypes.string,
    start_date_str: PropTypes.string,
    tag_classes: PropTypes.string,
    tags: PropTypes.string,
    taxes: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number,
        name: PropTypes.string,
        tax_id: PropTypes.number
      })
    ),
    temperature: PropTypes.string,
    use_options_wizard: PropTypes.number,
    weight: PropTypes.number,
    width: PropTypes.number
  })
});

const defaultProps = {};

export default { propTypes, defaultProps };
