import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  app_image: PropTypes.string,
  apple_touch_icon: PropTypes.string,
  default_sender: PropTypes.string,
  description: PropTypes.string,
  display_allergens: PropTypes.number,
  display_nutritional_info: PropTypes.number,
  display_tags: PropTypes.number,
  domain: PropTypes.string,
  favicon: PropTypes.string,
  ga_tracking_id: PropTypes.string,
  gtm_container_id: PropTypes.string,
  gtm_custom: PropTypes.number,
  intercom: PropTypes.number,
  large_image: PropTypes.string,
  logo: PropTypes.string,
  map_marker: PropTypes.string,
  name: PropTypes.string,
  order_types: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  short_name: PropTypes.string,
  small_image: PropTypes.string,
  title: PropTypes.string,
  website_url: PropTypes.string
});

const defaultProps = null;

export default { defaultProps, propTypes };
