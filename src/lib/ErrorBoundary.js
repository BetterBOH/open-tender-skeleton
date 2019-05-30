import { PureComponent } from 'react';
import withSentry from 'lib/withSentry';

class ErrorBoundary extends PureComponent {
  state = { error: false };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    if (this.props.sentryDidInit) {
      this.props.captureException(error);
    }
  }

  render() {
    if (this.state.error) {
      return null;
    }
    return this.props.children;
  }
}

export default withSentry(ErrorBoundary);
