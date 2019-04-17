import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`gift-${uniqueAriaId}`}
  >
    <desc id={`gift-${uniqueAriaId}`}>{alt || 'Gift'}</desc>
    <defs>
      <path
        id="gift-a"
        d="M13,2.5 C13,1.11928813 14.1192881,0 15.5,0 C16.8807119,0 18,1.11928813 18,2.5 L18,3 L8,3 L8,2.5 C8,1.11928813 9.11928813,0 10.5,0 C11.8807119,0 13,1.11928813 13,2.5 Z M12,5 L12,11 L2,11 C0.8954305,11 0,10.1045695 0,9 L0,7 C0,5.8954305 0.8954305,5 2,5 L12,5 Z M14,5 L24,5 C25.1045695,5 26,5.8954305 26,7 L26,9 C26,10.1045695 25.1045695,11 24,11 L14,11 L14,5 Z M12,13 L12,25 L5,25 C3.34314575,25 2,23.6568542 2,22 L2,13 L12,13 Z M14,13 L24,13 L24,22 C24,23.6568542 22.6568542,25 21,25 L14,25 L14,13 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="gift-b" fill="#fff">
        <use xlinkHref="#gift-a" />
      </mask>
      <g fill={fill} mask="url(#gift-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
