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
        id="plus-a"
        d="M14.5,11.5 L20,11.5 C20.8284271,11.5 21.5,12.1715729 21.5,13 C21.5,13.8284271 20.8284271,14.5 20,14.5 L14.5,14.5 L14.5,20 C14.5,20.8284271 13.8284271,21.5 13,21.5 C12.1715729,21.5 11.5,20.8284271 11.5,20 L11.5,14.5 L6,14.5 C5.17157288,14.5 4.5,13.8284271 4.5,13 C4.5,12.1715729 5.17157288,11.5 6,11.5 L11.5,11.5 L11.5,6 C11.5,5.17157288 12.1715729,4.5 13,4.5 C13.8284271,4.5 14.5,5.17157288 14.5,6 L14.5,11.5 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="plus-b" fill="#fff">
        <use xlinkHref="#plus-a" />
      </mask>
      <g fill={fill} mask="url(#plus-b)">
        <rect width="26" height="26" />
      </g>
    </g>
  </svg>
);
