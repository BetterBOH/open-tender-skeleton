import times from 'lodash/times';

export default (n, callback = f => f) => times(n, callback);
