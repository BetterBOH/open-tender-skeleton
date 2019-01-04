import React from 'react';
import ReactDOM from 'react-dom';

import config from 'config';

import 'index.scss';
import Skeleton from 'open-tender-skeleton/components/Skeleton';

import Text from 'open-tender-skeleton';

ReactDOM.render(<Skeleton config={config} />, document.getElementById('root'));
