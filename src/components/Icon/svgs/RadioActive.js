import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`active-radio-button-${uniqueAriaId}`}
  >
    <desc id={`active-radio-button-${uniqueAriaId}`}>
      {alt || 'Selected Radio Button'}
    </desc>
    <defs>
      <path
        id="radio-button-active-a"
        d="M13,21 C17.418278,21 21,17.418278 21,13 C21,8.581722 17.418278,5 13,5 C8.581722,5 5,8.581722 5,13 C5,17.418278 8.581722,21 13,21 Z M13,24 C6.92486775,24 2,19.0751322 2,13 C2,6.92486775 6.92486775,2 13,2 C19.0751322,2 24,6.92486775 24,13 C24,19.0751322 19.0751322,24 13,24 Z M13,19 C9.6862915,19 7,16.3137085 7,13 C7,9.6862915 9.6862915,7 13,7 C16.3137085,7 19,9.6862915 19,13 C19,16.3137085 16.3137085,19 13,19 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="radio-button-active-b" fill="#fff">
        <use xlinkHref="#radio-button-active-a" />
      </mask>
      <g fill={fill} mask="url(#radio-button-active-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
