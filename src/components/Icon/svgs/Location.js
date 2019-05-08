import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`location-${uniqueAriaId}`}
  >
    <desc id={`location-${uniqueAriaId}`}>{alt || 'Location'}</desc>
    <defs>
      <path
        id={`location-a-${uniqueAriaId}`}
        d="M2.68377736,11.9508468 C1.78700826,11.6519237 1.76730501,10.3906079 2.65429977,10.0638203 L21.6542998,3.06382034 C22.4548095,2.7688957 23.2332729,3.54735906 22.9383482,4.34786882 L15.9383482,23.3478688 C15.6115607,24.2348636 14.3502449,24.2151603 14.0513218,23.3183912 L11.2094357,14.7927329 L2.68377736,11.9508468 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id={`location-b-${uniqueAriaId}`} fill="#fff">
        <use xlinkHref={`#location-a-${uniqueAriaId}`} />
      </mask>
      <g fill={fill} mask={`url(#location-b-${uniqueAriaId})`}>
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
