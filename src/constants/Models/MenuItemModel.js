import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  allergen_classes: PropTypes.string,
  allergens: PropTypes.string,
  app_image_url: PropTypes.string,
  calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  category_id: PropTypes.number,
  category_name: PropTypes.string,
  delivery_days: PropTypes.string,
  description: PropTypes.string,
  display_options: PropTypes.number,
  end_date: PropTypes.string,
  end_date_str: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.number,
  increment: PropTypes.number,
  ingredients: PropTypes.string,
  kds_groups: PropTypes.array,
  large_image_url: PropTypes.string,
  length: PropTypes.string,
  max_quantity: PropTypes.number,
  menu_position: PropTypes.number,
  min_quantity: PropTypes.number,
  name: PropTypes.string,
  nutritional_info: PropTypes.object,
  option_groups: PropTypes.array,
  plu: PropTypes.string,
  price: PropTypes.string,
  sales_tax_override: PropTypes.string,
  service_restrictions: PropTypes.string,
  short_description: PropTypes.string,
  short_name: PropTypes.string,
  shorthand: PropTypes.string,
  sizes: PropTypes.array,
  slug: PropTypes.string,
  small_image_url: PropTypes.string,
  start_date: PropTypes.string,
  start_date_str: PropTypes.string,
  tag_classes: PropTypes.string,
  tags: PropTypes.string,
  taxes: PropTypes.array,
  temperature: PropTypes.string,
  use_options_wizard: PropTypes.number,
  weight: PropTypes.string,
  width: PropTypes.string
});

const defaultProps = null;

export default {
  propTypes,
  defaultProps
};
