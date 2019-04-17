import React from 'react';
import PropTypes from 'prop-types';
import { ConfigContext } from 'config';
import { ConfigContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withConfig = Component => {
  class ComponentWithConfig extends React.Component {
    static propTypes = {
      ...Component.propTypes,
      ...withConfig.propTypes
    };

    static defaultProps = {
      ...Component.defaultProps,
      ...withConfig.defaultProps
    };

    render() {
      return <Component {...this.props} />;
    }
  }

  const Context = environmentIsMock() ? MockContext : ConfigContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => <ComponentWithConfig {...props} openTenderConfig={context} />}
    </Context.Consumer>
  ));
};

withConfig.propTypes = {
  openTenderConfig: PropTypes.shape({
    apiKey: PropTypes.string,
    brandId: PropTypes.string,
    origin: PropTypes.string,
    apiEndpoint: PropTypes.string
  })
};

withConfig.defaultProps = {
  openTenderConfig: {}
};

export default withConfig;
