import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SentryContext } from 'config';
import get from 'utils/get';
import environmentIsMock from 'utils/environmentIsMock';
import { SentryContext as MockContext } from 'tests/mocks/config';
import { init, captureException, showReportDialog } from '@sentry/browser';

let sentryCache = {
  sentryDidInit: false,
  captureException
};

const initializeSentry = context => {
  if (context.dsn.length) {
    init({
      dsn: context.dsn,
      beforeSend(event) {
        if (event.exception) {
          showReportDialog({ eventId: event.event_id });
        }
        return event;
      }
    });
    sentryCache.sentryDidInit = true;
  }
};

const withSentry = WrappedComponent => {
  class ComponentWithSentry extends Component {
    static propTypes = {
      sentry: PropTypes.shape({
        dsn: PropTypes.string
      }),
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      sentry: {
        dsn: ''
      },
      ...WrappedComponent.defaultProps
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const Context = environmentIsMock() ? MockContext : SentryContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => {
        if (
          !!get(context, 'dsn', '') &&
          !sentryCache.sentryDidInit &&
          process.env.NODE_ENV !== 'development'
        ) {
          initializeSentry(context);
        }
        return <ComponentWithSentry {...props} {...sentryCache} />;
      }}
    </Context.Consumer>
  ));
};

export default withSentry;
