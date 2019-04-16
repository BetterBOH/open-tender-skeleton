import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`credit-card-${uniqueAriaId}`}
  >
    <desc id={`credit-card-${uniqueAriaId}`}>{alt || 'Credit Card'}</desc>
    <defs>
      <path
        id="credit-card-a"
        d="M25,9 L1,9 L1,7 C1,5.34314575 2.34314575,4 4,4 L22,4 C23.6568542,4 25,5.34314575 25,7 L25,9 Z M25,13 L25,19 C25,20.6568542 23.6568542,22 22,22 L4,22 C2.34314575,22 1,20.6568542 1,19 L1,13 L25,13 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="credit-card-b" fill="#fff">
        <use xlinkHref="#credit-card-a" />
      </mask>
      <g fill={fill} mask="url(#credit-card-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
