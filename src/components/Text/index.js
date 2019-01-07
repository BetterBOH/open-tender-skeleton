import RegistryLoader from 'lib/RegistryLoader';

const Text = props => RegistryLoader(
  props,
  'components.Text',
  () => import('./presentation.js')
);

export default Text;
