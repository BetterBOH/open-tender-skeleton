import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`mobile-${uniqueAriaId}`}
  >
    <desc id={`mobile-${uniqueAriaId}`}>{alt || 'Mobile'}</desc>
    <defs>
      <path
        id="mobile-a"
        d="M8,1 L18,1 C19.6568542,1 21,2.46524991 21,4.27272727 L21,21.7272727 C21,23.5347501 19.6568542,25 18,25 L8,25 C6.34314575,25 5,23.5347501 5,21.7272727 L5,4.27272727 C5,2.46524991 6.34314575,1 8,1 Z M13,20 C12.4477153,20 12,20.4477153 12,21 C12,21.5522847 12.4477153,22 13,22 C13.5522847,22 14,21.5522847 14,21 C14,20.4477153 13.5522847,20 13,20 Z M9,4 C8.44771525,4 8,4.44771525 8,5 L8,17 C8,17.5522847 8.44771525,18 9,18 L17,18 C17.5522847,18 18,17.5522847 18,17 L18,5 C18,4.44771525 17.5522847,4 17,4 L9,4 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mobile-b" fill="#fff">
        <use xlinkHref="#mobile-a" />
      </mask>
      <g fill={fill} mask="url(#mobile-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
