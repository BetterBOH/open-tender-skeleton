import PropTypes from 'prop-types';

const adapter = PropTypes.shape({
  apiKey: PropTypes.string,
  apiBase: PropTypes.string,
  origin: PropTypes.base,
  storage: PropTypes.object,
  requestTimeout: PropTypes.bool,
  currentOrder: PropTypes.object,
  customerToken: PropTypes.string
});

const events = PropTypes.shape({
  _callStack: PropTypes.array
});

const propTypes = PropTypes.shape({
  adapter: adapter,
  events: events,
  brands: PropTypes.shape({
    adapter: adapter
  }),
  customers: PropTypes.shape({
    adapter: adapter,
    events: events
  }),
  locations: PropTypes.shape({
    adapter: adapter
  }),
  addresses: PropTypes.shape({
    adapter: adapter
  }),
  menus: PropTypes.shape({
    adapter: adapter
  }),
  orders: PropTypes.shape({
    adapter: adapter,
    events: events
  }),
  payments: PropTypes.shape({
    adapter: adapter
  }),
  allergens: PropTypes.shape({
    adapter: adapter
  }),
  favorites: PropTypes.shape({
    adapter: adapter
  }),
  ratings: PropTypes.shape({
    adapter: adapter
  }),
  images: PropTypes.shape({
    adapter: adapter
  }),
  TestCreditCards: PropTypes.shape({
    visa: PropTypes.array,
    mastercard: PropTypes.array,
    amex: PropTypes.array,
    discover: PropTypes.array
  })
});
const defaultProps = {};

export default { propTypes, defaultProps };
