import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`map-${uniqueAriaId}`}
  >
    <desc id={`map-${uniqueAriaId}`}>{alt || 'Map'}</desc>
    <defs>
      <path
        id="map-a"
        d="M9.76470588,7 L9.76470588,22 C9.88529115,21.9902424 12.2186245,20.9902424 16.7647059,19 L16.7647059,4 L9.76470588,7 Z M18.1764706,3.69150422 L23.2660694,6.9977238 C23.7146605,7.20099121 24,7.62897477 24,8.09855357 L24,20.2177099 C24,20.8921431 23.4206038,21.4388792 22.7058824,21.4388792 C22.5119568,21.4388792 22.3205106,21.3977527 22.1456953,21.3185397 L18.1764706,18.6915042 L18.1764706,3.69150422 Z M8,7.56112079 L3.85430467,4.68146031 C3.67948942,4.60224732 3.48804319,4.56112079 3.29411765,4.56112079 C2.57939621,4.56112079 2,5.1078569 2,5.78229008 L2,17.9014464 C2,18.3710252 2.28533952,18.7990088 2.73393063,19.0022762 L8,22.5611208 L8,7.56112079 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="map-b" fill="#fff">
        <use xlinkHref="#map-a" />
      </mask>
      <g fill={fill} mask="url(#map-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
