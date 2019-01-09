import React, { Component } from 'react';

class GenericPageView extends Component {
  render() {
    return (
      <React.Suspense fallback={<div />}>
        <h1>Hello, Mock World! {this.props.location.pathname}</h1>
      </React.Suspense>
    );
  }
}

export default GenericPageView;
