import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  address: PropTypes.shape({
    city: PropTypes.string,
    customer_address_id: PropTypes.number,
    formatted_address: PropTypes.string,
    in_delivery_zone: PropTypes.bool,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    state_code: PropTypes.string,
    street_address: PropTypes.string,
    unit: PropTypes.string,
    zip_code: PropTypes.string
  }),
  credit_card: PropTypes.shape({
    card_type: PropTypes.string,
    customer_card_id: PropTypes.number,
    last4: PropTypes.string,
    masked: PropTypes.string
  }),
  discount: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      instructions: PropTypes.string,
      made_for: PropTypes.string,
      name: PropTypes.string,
      option_groups: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          option_items: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number,
              name: PropTypes.string,
              price: PropTypes.number
            })
          )
        })
      )
    })
  ),
  location_id: PropTypes.number,
  location_name: PropTypes.string,
  order_type: PropTypes.string,
  order_type_str: PropTypes.string,
  orders_id: PropTypes.number,
  payment_type: PropTypes.string,
  payment_type_str: PropTypes.string,
  phone: PropTypes.string,
  refund: PropTypes.number,
  requested_date: PropTypes.string,
  requested_time: PropTypes.string,
  service_type: PropTypes.string,
  service_type_str: PropTypes.string,
  shipping: PropTypes.number,
  status: PropTypes.string,
  submitted_date: PropTypes.string,
  submitted_time: PropTypes.string,
  subtotal: PropTypes.number,
  surcharge: PropTypes.number,
  tax: PropTypes.number,
  timezone: PropTypes.string,
  tip: PropTypes.number,
  total: PropTypes.number
});
const defaultProps = {};

export default { propTypes, defaultProps };
