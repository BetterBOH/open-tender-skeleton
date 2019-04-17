import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`lock-${uniqueAriaId}`}
  >
    <desc id={`lock-${uniqueAriaId}`}>{alt || 'Lock'}</desc>
    <defs>
      <path
        id="lock-a"
        d="M6.5,11 L6.5,8.5 C6.5,4.91014913 9.41014913,2 13,2 C16.5898509,2 19.5,4.91014913 19.5,8.5 L19.5,11 L20,11 C21.9329966,11 23.5,12.5670034 23.5,14.5 L23.5,21.5 C23.5,23.4329966 21.9329966,25 20,25 L6,25 C4.06700338,25 2.5,23.4329966 2.5,21.5 L2.5,14.5 C2.5,12.5670034 4.06700338,11 6,11 L6.5,11 Z M9.5,11 L16.5,11 L16.5,8.5 C16.5,6.56700338 14.9329966,5 13,5 C11.0670034,5 9.5,6.56700338 9.5,8.5 L9.5,11 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="lock-b" fill="#fff">
        <use xlinkHref="#lock-a" />
      </mask>
      <g fill={fill} mask="url(#lock-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
