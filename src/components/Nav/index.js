import RegistryLoader from 'lib/RegistryLoader';

const Nav = props =>
  RegistryLoader(props, 'components.Nav', () => import('./presentation.js'));

export default Nav;
