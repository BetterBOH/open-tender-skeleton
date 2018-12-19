import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';
import { Skeleton } from 'open-tender-skeleton';

import Text from 'components/Text';

const config = {
  registry: {
    components: {
      Text: {
        path: Text
      }
    }
  }
};

ReactDOM.render(<Skeleton config={config} />, document.getElementById('root'));
