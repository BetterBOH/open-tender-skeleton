import React from 'react';
import { ConfigContext } from '../../config.js';

import get from '../../utils/get';

export default props => {
  console.log('INTERNAL TEXT', props);
  return (
    <ConfigContext.Consumer>
      {context => {
        console.log('INTERNAL CONTEXT', context);
        const AlternatePresentation = get(context, 'registry.components.text');

        if (AlternatePresentation)
          return <AlternatePresentation {...props} {...context} />;

        if (!props.elem) return <span>{props.children}</span>;
        if (props.elem === 'h1') return <h1>{props.children}</h1>;
      }}
    </ConfigContext.Consumer>
  );
};
