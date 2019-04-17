import React from 'react';
import PropTypes from 'prop-types';
import { BrandContext } from 'config';
import { BrandContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withBrand = Component => {
  class ComponentWithBrand extends React.Component {
    static propTypes = {
      ...Component.propTypes,
      ...withBrand.propTypes
    };

    static defaultProps = {
      ...Component.defaultProps,
      ...withBrand.defaultProps
    };

    render() {
      return <Component {...this.props} />;
    }
  }

  const Context = environmentIsMock() ? MockContext : BrandContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => <ComponentWithBrand {...props} brandContext={context} />}
    </Context.Consumer>
  ));
};

withBrand.propTypes = {
  brand: PropTypes.shape({
    backgroundImage: PropTypes.string,
    logoImage: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
      })
    ),
    theme: PropTypes.string,
    colors: PropTypes.object
  }),
  registry: PropTypes.shape({
    components: PropTypes.object
  }),
  locales: PropTypes.object,
  mapbox: PropTypes.object
};

withBrand.defaultProps = {
  brand: {
    backgroundImage: '',
    logoImage: '',
    links: [],
    theme: '',
    colors: {}
  },
  registry: {
    components: {}
  },
  locales: {},
  mapbox: {}
};

export default withBrand;
