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
  openTender: {
    apiKey: process.env.REACT_APP_OPEN_TENDER_API_KEY,
    brandId: process.env.REACT_APP_OPEN_TENDER_BRAND
  }
};
