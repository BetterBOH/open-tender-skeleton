import React from 'react';
import { ConfigContext } from '../../config.js';

import get from '../../utils/get';

export default props => (
  <ConfigContext.Consumer>
    {context => {
      const AlternatePresentation = get(
        context,
        'registry.components.Text.path'
      );

      if (AlternatePresentation) {
        return <AlternatePresentation {...props} {...context} />;
      }

      if (!props.elem) return <span>{props.children}</span>;
      if (props.elem === 'h1') return <h1>{props.children}</h1>;
    }}
  </ConfigContext.Consumer>
);
