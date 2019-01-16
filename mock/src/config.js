export default {
  registry: {
    components: {
      Text: {
        import: () => import('components/Text')
      }
    },
    routes: {
      test: {
        path: '/test',
        component: () => import('containers/GenericPageContainer')
      }
    }
  },
  locales: {
    'en-US': {
      global: {
        hello: 'Hello, en-US mock World!'
      }
    }
  },
  brandibble: {
    apiKey: process.env.REACT_APP_BRANDIBBLE_API_KEY,
    brandId: process.env.REACT_APP_BRANDIBBLE_BRAND
  }
};
