import { store, history } from 'store';

export default {
  registry: {
    components: {
      Text: {
        import: () => import('components/Text')
      }
    },
    state: {
      store,
      history
    },
    routes: {
      test: {
        path: '/test',
        component: () => import('containers/GenericPageContainer')
      }
    }
  }
};
