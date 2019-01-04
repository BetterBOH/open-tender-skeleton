import React from 'react';
import { ConfigContext } from 'config';

import get from 'utils/get';

export default props => (
  <ConfigContext.Consumer>
    {context => {
      const altImport = get(context, 'registry.components.Text.import');

      if (altImport && typeof altImport === 'function') {
        const AlternatePresentation = React.lazy(altImport);
        return <AlternatePresentation {...props} {...context} />;
      }

      if (!props.elem) return <span>{props.children}</span>;
      if (props.elem === 'h1') return <h1>{props.children}</h1>;
    }}
  </ConfigContext.Consumer>
);
