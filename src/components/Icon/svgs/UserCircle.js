import React from 'react';

export default ({ fill, alt, uniqueAriaId }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-labelledby={`user-circle-${uniqueAriaId}`}
  >
    <defs>
      <desc id={`user-circle-${uniqueAriaId}`}>{alt || 'User Circle'}</desc>
      <path
        id={`user-circle-a-${uniqueAriaId}`}
        d="M7.20252688,18.5126725 C7.58538549,17.6229573 8.46994301,17 9.5,17 L16.5,17 C17.530057,17 18.4146145,17.6229573 18.7974731,18.5126725 C20.1623293,17.0777535 21,15.136701 21,13 C21,8.581722 17.418278,5 13,5 C8.581722,5 5,8.581722 5,13 C5,15.136701 5.83767066,17.0777535 7.20252688,18.5126725 Z M13,24 C6.92486775,24 2,19.0751322 2,13 C2,6.92486775 6.92486775,2 13,2 C19.0751322,2 24,6.92486775 24,13 C24,19.0751322 19.0751322,24 13,24 Z M13,15.5 C11.0670034,15.5 9.5,13.9329966 9.5,12 C9.5,10.0670034 11.0670034,8.5 13,8.5 C14.9329966,8.5 16.5,10.0670034 16.5,12 C16.5,13.9329966 14.9329966,15.5 13,15.5 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id={`user-circle-b-${uniqueAriaId}`} fill="#fff">
        <use xlinkHref={`#user-circle-a-${uniqueAriaId}`} />
      </mask>
      <g fill={fill} mask={`url(#user-circle-b-${uniqueAriaId})`}>
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
