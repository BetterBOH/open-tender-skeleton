import get from 'utils/get';
import StateCodes from 'constants/StateCodes';

export default feature => {
  const coordinates = {
    longitude: get(feature, 'center[0]'),
    latitude: get(feature, 'center[1]')
  };

  console.log(feature);
  const zipCodeObj = get(feature, 'context', []).find(contextItem =>
    contextItem.id.match('postcode')
  );

  return {
    street_address: `${get(feature, 'meta.address', '')} ${get(
      feature,
      'meta.street',
      ''
    )}`,
    city: get(feature, 'meta.city', ''),
    state_code: StateCodes[get(feature, 'meta.state', '')],
    zip_code: get(zipCodeObj, 'text', ''),
    latitude: get(coordinates, 'latitude', 0),
    longitude: get(coordinates, 'longitude', 0)
  };
};
