import React from 'react';

export default ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
  >
    <defs>
      <path
        id="bag-a"
        d="M6.5,8.5 C6.5,4.91014913 9.41014913,2 13,2 C16.5898509,2 19.5,4.91014913 19.5,8.5 L20,8.5 C21.6568542,8.5 23,9.84314575 23,11.5 L21,21.5 C21,23.1568542 19.6568542,24.5 18,24.5 L8,24.5 C6.34314575,24.5 5,23.1568542 5,21.5 L3,11.5 C3,9.84314575 4.34314575,8.5 6,8.5 L6.5,8.5 Z M9.5,8.5 L16.5,8.5 C16.5,6.56700338 14.9329966,5 13,5 C11.0670034,5 9.5,6.56700338 9.5,8.5 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bag-b" fill="#fff">
        <use xlinkHref="#bag-a" />
      </mask>
      <g fill={fill} mask="url(#bag-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
