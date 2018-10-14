import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

// Reference: https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    Sentry.configureScope((scope) => {
      Object.keys(info).forEach((key) => {
        scope.setExtra(key, info[key]);
      });
    });
    Sentry.captureException(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. Our team has been notified.</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
