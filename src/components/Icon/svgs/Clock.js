import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`clock-${uniqueAriaId}`}
  >
    <desc id={`clock-${uniqueAriaId}`}>{alt || 'Clock'}</desc>
    <defs>
      <path
        id="clock-a"
        d="M13,24 C6.92486775,24 2,19.0751322 2,13 C2,6.92486775 6.92486775,2 13,2 C19.0751322,2 24,6.92486775 24,13 C24,19.0751322 19.0751322,24 13,24 Z M9.29289322,15.2928932 C8.90236893,15.6834175 8.90236893,16.3165825 9.29289322,16.7071068 C9.68341751,17.0976311 10.3165825,17.0976311 10.7071068,16.7071068 L13.7071068,13.7071068 C13.8946432,13.5195704 14,13.2652165 14,13 L14,7 C14,6.44771525 13.5522847,6 13,6 C12.4477153,6 12,6.44771525 12,7 L12,12.5857864 L9.29289322,15.2928932 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="clock-b" fill="#fff">
        <use xlinkHref="#clock-a" />
      </mask>
      <g fill={fill} mask="url(#clock-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
