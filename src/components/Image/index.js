import RegistryLoader from 'lib/RegistryLoader';

const Image = props =>
  RegistryLoader(props, 'components.Image', () => import('./presentation.js'));

export default Image;
