import get from 'utils/get';
import slugify from 'utils/slugify';

export default location => {
  const id = get(location, 'location_id');
  const name = get(location, 'name');

  return `${id}-${slugify(name)}`;
};
