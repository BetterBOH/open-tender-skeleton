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
      black: '#1f2933',
      white: '#fff',
      'gray-lighter': '#f5f7fa',
      'gray-light': '#cbd2d9',
      gray: '#616e7c',
      'gray-dark': '#3e4c59',
      'white-overlay': 'rgba(255, 255, 255, 0.95)',
      'black-overlay': 'rgba(0, 0, 0, 0.1)',
      success: '#51dc8e',
      warning: '#ffbe4f',
      error: '#e20f0f'
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
