import RegistryLoader from 'lib/RegistryLoader';

const LinkButton = props =>
  RegistryLoader(props, 'components.LinkButton', () =>
    import('./presentation.js')
  );

export default LinkButton;
