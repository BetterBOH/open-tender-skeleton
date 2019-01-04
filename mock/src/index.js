import React from 'react';
import ReactDOM from 'react-dom';

import config from 'config';

import 'index.scss';
import Skeleton from 'open-tender-skeleton';

import Text from 'open-tender-skeleton/dist/Text';

ReactDOM.render(<Skeleton config={config} />, document.getElementById('root'));
