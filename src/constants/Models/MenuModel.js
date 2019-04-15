import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  daypart: {
    daypart: PropTypes.string,
    ends_at: PropTypes.string,
    is_current: PropTypes.boolean,
    service_types: {
      delivery: {
        hours: PropTypes.arrayOf(PropTypes.string),
        is_orderable: PropTypes.boolean
      },
      pickup: {
        hours: PropTypes.arrayOf(PropTypes.string),
        is_orderable: PropTypes.boolean
      }
    },
    starts_at: PropTypes.string,
    weekday: PropTypes.string
  },
  location_id: PropTypes.number,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      app_image_url: PropTypes.string,
      appearance: PropTypes.string,
      children: PropTypes.array,
      description: PropTypes.string,
      id: PropTypes.number,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          allergen_classes: PropTypes.string,
          allergens: PropTypes.string,
          app_image_url: PropTypes.string,
          calories: PropTypes.string,
          category_id: PropTypes.number,
          category_name: PropTypes.string,
          delivery_days: PropTypes.number,
          description: PropTypes.string,
          display_options: PropTypes.number,
          end_date: PropTypes.string,
          end_date_str: PropTypes.string,
          has_upsell: PropTypes.boolean,
          height: PropTypes.number,
          id: PropTypes.number,
          increment: PropTypes.number,
          ingredients: PropTypes.array,
          kds_groups: PropTypes.array,
          large_image_url: PropTypes.string,
          length: PropTypes.number,
          max_quantity: PropTypes.number,
          menu_position: PropTypes.number,
          min_quantity: PropTypes.number,
          name: PropTypes.string,
          nutritional_info: PropTypes.object,
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
          sizes: PropTypes.arrayOf(PropTypes.object),
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
      ),
      large_image_url: PropTypes.string,
      name: PropTypes.string,
      pos_display_color: PropTypes.string,
      pos_display_order: PropTypes.number,
      pos_section_id: PropTypes.number,
      position: PropTypes.number,
      short_name: PropTypes.string,
      slug: PropTypes.string,
      small_image_url: PropTypes.string
    })
  ),
  name: PropTypes.string,
  order_type: PropTypes.string,
  service_type: PropTypes.string,
  sold_out_items: PropTypes.array
});

const defaultProps = {};

export default { propTypes, defaultProps };
