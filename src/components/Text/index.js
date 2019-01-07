import RegistryLoader from 'lib/RegistryLoader';

export default props => RegistryLoader(
  props,
  () => import('./presentation.js')
);
