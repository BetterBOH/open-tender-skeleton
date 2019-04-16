export default {
  brand: {
    backgroundImage:
      'http://tacombi.com/system/uploads/gallery_image/image/40/gallery-events-tacombi-flatiron.jpg',
    logoImage:
      'https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png',
    brandColor: '#68070A',
    textColor: 'white',
    links: [
      {
        name: 'Privacy Policy',
        url: '/privacy-policy'
      },
      {
        name: 'Terms of Use',
        url: '/terms'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com'
      }
    ],
    theme: 'dark',
    // prettier-ignore
    colors: {
      'brand-color-light': '#ce0901',
      'brand-color-dark': '#68070a',
      'black': '#4a4a4a',
      'white': '#fff',
      'gray-light': '#f1f3f8',
      'gray': '#cdcdd7',
      'gray-dark': '#8d92a3',
      'white-overlay': 'rgba(255, 255, 255, 0.9)',
      'black-overlay': 'rgba(0, 0, 0, 0.1)'
    }
  },
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
