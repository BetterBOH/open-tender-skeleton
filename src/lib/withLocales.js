import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocalesContext } from 'config';
import { LocalesContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withLocales = WrappedComponent => {
  class ComponentWithLocalesContext extends Component {
    static propTypes = {
      localesContext: PropTypes.shape({
        Language: PropTypes.shape({
          t: PropTypes.func.isRequired
        })
      }),
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      localesContext: {
        Language: {
          t: f => f
        }
      },
      ...WrappedComponent.defaultProps
    };

    render() {
      console.log(this.props);
      return <WrappedComponent {...this.props} />;
    }
  }

  const Context = environmentIsMock() ? MockContext : LocalesContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => (
        <ComponentWithLocalesContext {...props} localesContext={context} />
      )}
    </Context.Consumer>
  ));
};

export default withLocales;
