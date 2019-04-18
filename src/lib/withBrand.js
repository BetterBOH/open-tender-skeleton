import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrandContext } from 'config';
import { BrandContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withBrand = WrappedComponent => {
  class ComponentWithBrandContext extends Component {
    static propTypes = {
      brandContext: PropTypes.shape({
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
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      brandContext: {
        backgroundImage: '',
        logoImage: '',
        links: [],
        theme: '',
        colors: null
      },
      ...WrappedComponent.defaultProps
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const Context = environmentIsMock() ? MockContext : BrandContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => (
        <ComponentWithBrandContext {...props} brandContext={context} />
      )}
    </Context.Consumer>
  ));
};

export default withBrand;
