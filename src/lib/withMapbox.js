import React from 'react';
import { MapboxContext } from 'config';

const withMapbox = Component =>
  React.memo(props => (
    <MapboxContext.Consumer>
      {context => <Component {...props} mapbox={context} />}
    </MapboxContext.Consumer>
  ));

export default withMapbox;
