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
    }
  }
};
