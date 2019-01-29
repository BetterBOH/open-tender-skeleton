export default {
  registry: {
    components: {}
  },
  locales: {},
  openTenderConfig: {
    apiKey: process.env.REACT_APP_OPEN_TENDER_API_KEY,
    brandId: process.env.REACT_APP_OPEN_TENDER_BRAND,
    origin: process.env.REACT_APP_OPEN_TENDER_ORIGIN,
    apiEndpoint: process.env.REACT_APP_OPEN_TENDER_API_ENDPOINT
  },
  mapbox: {
    mapboxApiKey: process.env.REACT_APP_MAPBOX_API_KEY,
    mapboxStyleUrl: process.env.REACT_APP_MAPBOX_STYLE_URL
  }
};
