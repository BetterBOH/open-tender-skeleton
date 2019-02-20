import PropTypes from 'prop-types';

const brandibbleDaypartServiceType = PropTypes.shape({
  hours: PropTypes.arrayOf(PropTypes.string),
  is_orderable: PropTypes.bool
});

const brandibbleDaypart = PropTypes.shape({
  daypart: PropTypes.string,
  ends_at: PropTypes.string,
  is_current: PropTypes.bool,
  service_types: PropTypes.shape({
    delivery: brandibbleDaypartServiceType,
    pickup: brandibbleDaypartServiceType
  }),
  starts_at: PropTypes.string,
  weekday: PropTypes.string
});

const brandibbleHour = PropTypes.shape({
  close: PropTypes.string,
  holiday: PropTypes.string,
  open: PropTypes.string,
  weekday: PropTypes.string
});

const propTypes = PropTypes.shape({
  city: PropTypes.string,
  cross_streets: PropTypes.string,
  dayparts: PropTypes.arrayOf(brandibbleDaypart),
  delivery_minimum: PropTypes.number,
  delivery_zone: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  delivery_zone_description: PropTypes.string,
  description: PropTypes.string,
  has_delivery: PropTypes.bool,
  has_pickup: PropTypes.bool,
  hours_delivery: PropTypes.arrayOf(brandibbleHour),
  hours_description: PropTypes.string,
  hours_pickup: PropTypes.arrayOf(brandibbleHour),
  hours_store: PropTypes.arrayOf(PropTypes.string),
  in_delivery_zone: PropTypes.bool,
  is_closed: PropTypes.bool,
  is_closed_temp: PropTypes.bool,
  is_coming_soon: PropTypes.bool,
  is_hidden: PropTypes.bool,
  is_new: PropTypes.bool,
  large_image_url: PropTypes.string,
  latitude: PropTypes.number,
  location_id: PropTypes.number,
  longitude: PropTypes.number,
  name: PropTypes.string,
  payment_types: PropTypes.shape({
    delivery: PropTypes.arrayOf(PropTypes.string),
    pickup: PropTypes.arrayOf(PropTypes.string)
  }),
  phone_number: PropTypes.string,
  slug: PropTypes.string,
  small_image_url: PropTypes.string,
  state_code: PropTypes.string,
  street_address: PropTypes.string,
  timezone: PropTypes.string,
  valid_order_times: PropTypes.array,
  zip_code: PropTypes.string
});
const defaultProps = {};

export default { propTypes, defaultProps };
