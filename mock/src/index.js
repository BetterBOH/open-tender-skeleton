import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';
import { Skeleton } from 'open-tender-skeleton';

import AltText from 'components/Text';

const config = {
  registry: {
    components: {
      Text: {
        path: AltText
      }
    }
  }
};

ReactDOM.render(<Skeleton config={config} />, document.getElementById('root'));
