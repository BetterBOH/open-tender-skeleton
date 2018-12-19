import _get from 'lodash/get';
export default (obj, path = '', fallback) => _get(obj, path, fallback);
