import RegistryLoader from 'lib/RegistryLoader';

const Card = props =>
  RegistryLoader(props, 'components.Card', () => import('./presentation.js'));

export default Card;
